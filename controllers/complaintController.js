const Complaint = require("../models/Complaint");
const { validationResult } = require("express-validator");
const { logActivity } = require("../services/loggerService");
const { analyzeComplaint } = require("../services/aiService");

exports.createComplaint = async (req, res, next) => {
  console.log("🔍 req.user = ", req.user);

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { title, description } = req.body;

    const aiResult = await analyzeComplaint(description);

    const complaint = await Complaint.create({
      user: req.user._id,
      title,
      description,
      status: "Pending",
      category: aiResult.category,
      tag: aiResult.tag,
    });

    await logActivity({
      user: req.user._id,
      action: "Complaint Created",
      module: "Complaint",
      metadata: { category: aiResult.category, tag: aiResult.tag },
    });

    res.status(201).json({
      message: "Complaint submitted with AI categorization",
      complaint,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserComplaints = async (req, res, next) => {
  try {
    const complaints = await Complaint.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(complaints);
  } catch (error) {
    next(error);
  }
};

exports.updateComplaintStatus = async (req, res, next) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint)
      return res.status(404).json({ message: "Complaint not found" });

    complaint.status = req.body.status || "In Progress";
    await complaint.save();

    // Log
    await logActivity({
      user: req.user._id,
      action: `Complaint status updated to ${complaint.status}`,
      module: "Complaint",
      metadata: { complaintId: complaint._id },
    });

    res.json({ message: "Status updated", complaint });
  } catch (error) {
    next(error);
  }
};

exports.getAllComplaints = async (req, res, next) => {
  try {
    const { status, category } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;

    const complaints = await Complaint.find(filter)
      .populate("user", "name email") // optional: show user name/email
      .sort({ createdAt: -1 });

    res.json({ total: complaints.length, complaints });
  } catch (error) {
    next(error);
  }
};


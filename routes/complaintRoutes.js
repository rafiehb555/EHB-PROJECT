const express = require("express");
const router = express.Router();
const complaintController = require("../controllers/complaintController"); // ✅ This was missing
const { validateComplaint } = require("../validators/complaintValidator");
const auth = require("../middleware/auth"); // ✅ Ensures only logged-in users can file/view complaints

// 🔍 GET all complaints for the logged-in user
router.get("/my", auth, complaintController.getUserComplaints);

// 📩 POST a new complaint
router.post("/", auth, validateComplaint, complaintController.createComplaint);

// 🔧 PATCH complaint status (admin/franchise)
router.patch("/:id/status", auth, complaintController.updateComplaintStatus);

router.get("/all", auth, complaintController.getAllComplaints);

module.exports = router;

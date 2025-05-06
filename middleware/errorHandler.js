// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
    console.error('💥 Error:', err.stack);
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Internal Server Error"
    });
  };
  
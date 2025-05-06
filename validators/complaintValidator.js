const { body } = require('express-validator');

exports.validateComplaint = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 chars')
];

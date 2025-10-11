// middleware/validation.js
export const validateMovie = (req, res, next) => {
  const { title, image, date } = req.body;
  
  const errors = [];
  
  if (!title || title.trim() === '') {
    errors.push('Title is required');
  }
  
  if (!image || image.trim() === '') {
    errors.push('Image URL is required');
  }
  
  if (!date) {
    errors.push('Date is required');
  } else if (isNaN(Date.parse(date))) {
    errors.push('Invalid date format');
  }
  
  if (req.body.star && (req.body.star < 0 || req.body.star > 10)) {
    errors.push('Star rating must be between 0 and 10');
  }
  
  if (req.body.duration && req.body.duration < 0) {
    errors.push('Duration must be a positive number');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      message: 'Validation failed',
      errors
    });
  }
  
  next();
};
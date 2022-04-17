const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./../controllers/handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  // allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// Create Review
exports.createReview = factory.createOne(Review);

// Delete Rewiew
exports.deleteReview = factory.deleteOne(Review);

// Update
exports.updateReview = factory.updateOne(Review);

// Get Review
exports.getReview = factory.getOne(Review);

// Get All Reviews
exports.getAllReviews = factory.getAll(Review);

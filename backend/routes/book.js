var express = require('express');
var Book = require('../models/Book.js');

var router = express.Router();
/* GET ALL BOOKS */
router.route('/books').get(
  (req, res, next) => {
    Book.find((err, products) => {
      if (err) return next(err);
      res.json(products);
    });
  });

/* GET SINGLE BOOK BY ID */
router.route('/books/:id').get(
  (req, res, next) => {
    Book.findById(req.params.id,
      (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

/* SAVE BOOK */
router.route('/books').post(
  (req, res, next) => {
    Book.create(req.body,
      (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

/* UPDATE BOOK */
router.route('/books/:id').put(
  (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body,
      (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

/* DELETE BOOK */
router.route('/books/:id').delete(
  (req, res, next) => {
    Book.findByIdAndRemove(req.params.id, req.body,
      (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
  });

module.exports = router;
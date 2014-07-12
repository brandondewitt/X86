'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Bio = mongoose.model('Bio'),
  Album = mongoose.model('Album'),
  Contact = mongoose.model('Contact');

/**
 * Get bio
 */
exports.bio = function(req, res) {
  return Bio.find(function (err, bio) {
    if (!err) {
      return res.json(bio);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Get albums/:type
 */
exports.albums = function(req, res) {
  return Album.find({type: req.params.type}, function (err, albums) {
    if (!err) {
      return res.json(albums);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Get contacts
 */
exports.contacts = function(req, res) {
  return Contact.find(function (err, contacts) {
    if (!err) {
      return res.json(contacts);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Create contacts
 */
exports.createContact = function(req, res) {
  var contact = new Contact(req.body);
  return contact.save(function (err, contacts) {
    if (!err) {
      return res.json(contacts);
    } else {
      return res.send(err);
    }
  });
};


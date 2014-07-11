'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Contact Schema
 */
var ContactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  comment: String
});

/**
 * Validations
 */

mongoose.model('Contact', ContactSchema);

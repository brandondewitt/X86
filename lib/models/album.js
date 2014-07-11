'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Album Schema
 */
var AlbumSchema = new Schema({
  name: String,
  type: String,
  media: Array
});

/**
 * Validations
 */

mongoose.model('Album', AlbumSchema);

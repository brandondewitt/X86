'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Bio Schema
 */
var BioSchema = new Schema({
  info: String
});

mongoose.model('Bio', BioSchema);

'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Bio = mongoose.model('Bio'),
  Album = mongoose.model('Album'),
  Contact = mongoose.model('Contact');

/**
 * Populate database with sample application data
 */

//Clear old bio, then add bio in
Bio.find({}).remove(function() {
  Bio.create({
    info : 'Awesome information about X86.',
  }, function() {
      console.log('finished populating bio');
    }
  );
});

//Clear old album, then add albums in
Album.find({}).remove(function() {
  Album.create({
    name : 'Live',
    type: 'photos',
    media : [
      {url : 'https://a2-images.myspacecdn.com/images01/79/c886f5272066630f280323ec7fa1c166/full.jpg'},
      {url : 'https://a3-images.myspacecdn.com/images02/47/0b1c64f853f34c2e93e758b4d2192796/full.jpg'},
      {url : 'https://a2-images.myspacecdn.com/images02/59/8efa16c4bc4b42038f92572ffd00dfe5/full.jpg'},
      {url : 'https://a1-images.myspacecdn.com/images02/59/0e045fc37d8d4f46a1ec410aa6b8bf04/full.jpg'},
      {url : 'https://a1-images.myspacecdn.com/images02/51/c348b6397589455eab3da713f32e1849/full.jpg'},
      {url : 'https://a2-images.myspacecdn.com/images02/58/6b3a5e38bdc84e99a3a97c8a5c37dafb/full.jpg'},
      {url : 'https://a1-images.myspacecdn.com/images02/108/ac0178212248473ba064f165ec88bccf/full.jpg'},
      {url : 'https://a1-images.myspacecdn.com/images02/112/28b72b3a03b64955b1b4ad99ae79b29c/full.jpg'},
      {url : 'https://a4-images.myspacecdn.com/images02/101/96a92ed9185140b99e6c02bb21a574e0/full.jpg'},
      {url : 'https://a2-images.myspacecdn.com/images02/77/691346a1897c4b4d91aeebfd970bda72/full.jpg'},
      {url : 'https://a2-images.myspacecdn.com/images02/105/85408113753b41eab327850dc86e12f3/full.jpg'},
      {url : 'https://a3-images.myspacecdn.com/images02/69/402fedbda00c484d84bf2f4b1b98e16e/full.jpg'},
      {url : 'https://a1-images.myspacecdn.com/images02/110/e9186dc6784f41b9adace4256e5c82cd/full.jpg'},
      {url : 'https://a4-images.myspacecdn.com/images02/86/eca39ef9bb5b4f59a88f06b1b80bfe1b/full.jpg'},
      {url : 'https://a4-images.myspacecdn.com/images02/96/2f2b593faea6445d8b3261dc83eb6f42/full.jpg'},
      {url : 'https://a3-images.myspacecdn.com/images02/104/7e9b40145ab243378905dd32ca954286/full.jpg'},
      {url : 'https://a1-images.myspacecdn.com/images02/65/8306d560a159465f9e25414bf5a7113b/full.jpg'},
      {url : 'https://a3-images.myspacecdn.com/images02/112/4e38fbfbeb684c838653719e9cafd728/full.jpg'},
      {url : 'https://a1-images.myspacecdn.com/images02/33/6cac885d74ba471383cd2d410b6ec597/full.jpg'}
    ]
  }, {
    name : 'Live',
    type: 'videos',
    media : [
      {url : 'Su7RvzSQ7W0'}
    ]
  },function() {
      console.log('finished populating albums');
    }
  );
});

//Clear old contact, then add contact in
Contact.find({}).remove(function() {
  Contact.create({
    name : 'Brandon',
    email : 'brandon@brandon.com',
    phone : '555-555-555',
    comment : 'You guys are awesome! Just saying..'
  }, function() {
      console.log('finished populating contacts');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});

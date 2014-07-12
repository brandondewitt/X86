'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('GET /api/contacts', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/contacts')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/contacts', function() {
  it('should add contact', function(done) {
    request(app)  
      .post('/api/contacts')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body._id.should.be.ok;
        done();
      });
  });
});

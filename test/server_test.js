const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;
const mongoose = require('mongoose');
const Crew = require(__dirname + '/../models/crew');
const port = process.env.PORT = 5000;
process.env.MONGODB_URI = 'mongodb://localhost/test_crew_db';
const server = require(__dirname + '/../server');

describe ('Crew POST method', () => {
  before((done) => {
    server.start(() => {
      console.log('Server running at: ', server.info.uri);
      done();
    });
  });
});

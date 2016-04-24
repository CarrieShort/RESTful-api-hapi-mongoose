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

describe('Crew POST method', () => {
  before((done) => {
    server.start(() => {
      console.log('Server running at: ', server.info.uri);
      done();
    });
  });
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      server.stop(() => {
        console.log('Server stopped');
        done();
      });
    });
  });
  it('should create a crew member', (done) => {
    request('localhost:' + port)
    .post('/api/crew')
    .send({
      name: 'Zoë Alleyne Washburne',
      rank: 'First Officer'
    })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.message).to.eql('Crew member added');
      expect(res.body.crewMember.name).to.eql('Zoë Alleyne Washburne');
      expect(res.body.crewMember.rank).to.eql('First Officer');
      expect(res.body.crewMember.ship).to.eql('Firefly');
      done();
    });
  });
});

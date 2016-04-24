const hapi = require('hapi');
const server = module.exports = new hapi.Server();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/crew_db');
const Crew = require('./models/crew.js');

server.connection( { port: PORT } );

server.route({
  method: 'GET',
  path: '/api/crew',
  handler: (request, reply) => {
    reply({
      statusCode: 200,
      message: 'All Crew Members',
      data: [
        {
          name: 'Malcolm Reynolds',
          rank: 'Captain'
        },
        {
          name: 'Kaywinnet Lee Frye',
          rank: 'Engineer'
        }
      ]
    });
  }
});

server.route({
  method: 'POST',
  path: '/api/crew',
  handler: (request, reply) => {
    var crew = new Crew(request.payload);
    crew.save((err, data) => {
      if (err) {
        reply({
          statusCode: 503,
          message: err
        });
      } else {
        reply({
          statusCode: 201,
          message: 'Crew member added',
          crewMember: data
        });
      }
    });
  }
});

server.start(() => {
  console.log('Server running at: ', server.info.uri);
});

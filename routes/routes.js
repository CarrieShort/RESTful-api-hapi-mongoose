const Crew = require(__dirname + '/../models/crew.js');

module.exports = [{
  method: 'GET',
  path: '/api/crew',
  handler: (request, reply) => {
    reply({
      statusCode: 200,
      message: 'All Crew Members',
      data: [{
        name: 'Malcolm Reynolds',
        rank: 'Captain'
      }, {
        name: 'Kaywinnet Lee Frye',
        rank: 'Engineer'
      }]
    });
  }
}, {
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
}];

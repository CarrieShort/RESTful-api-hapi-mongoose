const Crew = require(__dirname + '/../models/crew.js');

module.exports = [{
  method: 'GET',
  path: '/api/crew',
  handler: (request, reply) => {
    Crew.find({}, (err, data) => {
      if (err) {
        return reply({
          statusCode: 503,
          message: err
        });
      }
      reply({
        statusCode: 200,
        message: 'Crew Members',
        crewMembers: data
      });
    });
  }
}, {
  method: 'POST',
  path: '/api/crew',
  handler: (request, reply) => {
    var crew = new Crew(request.payload);
    crew.save((err, data) => {
      if (err) {
        return reply({
          statusCode: 503,
          message: err
        });
      }
      reply({
        statusCode: 200,
        message: 'Crew member added',
        crewMember: data
      });

    });
  }
}];

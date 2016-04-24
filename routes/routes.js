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
        message: 'Crew members',
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
}, {
  method: 'PUT',
  path: '/api/crew/{id}',
  handler: (request, reply) => {
    var crewData = request.payload;
    delete crewData._id;
    Crew.update({ _id: request.params.id }, request.payload, (err, data) => {
      if (err) {
        return reply({
          statusCode: 503,
          message: err
        });
      }
      reply({
        statusCode: 200,
        message: 'Crew member updated',
        crewMember: data
      });
    });

  }
}, {
  method: 'DELETE',
  path: '/api/crew/{id}',
  handler: (request, reply) => {
    Crew.findOneAndRemove({ _id: request.params.id }, (err, data) => {
      if (err) {
        return reply({
          statusCode: 503,
          message: err
        });
      }
      reply({
        statusCode: 200,
        message: 'Crew member has left the crew',
        crewMember: data
      });
    });

  }
}];

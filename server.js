const hapi = require('hapi');
const server = new hapi.Server();
const PORT = process.env.PORT || 3000;

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

server.start(() => {
  console.log('Server running at: ', server.info.uri);
});

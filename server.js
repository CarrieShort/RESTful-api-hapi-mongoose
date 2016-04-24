const hapi = require('hapi');
const server = module.exports = new hapi.Server();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/crew_db');
const routes = require(__dirname + '/routes/routes.js');
server.connection( { port: PORT } );

server.route(routes);

server.start(() => {
  console.log('Server running at: ', server.info.uri);
});

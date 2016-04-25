# RESTful API Using Hapi and Mongoose
A RESTful api using Hapi as a server framework and Mongoose for my mongoDB connections. I used this [blog article](http://www.tothenew.com/blog/build-restful-api-using-node-and-hapi/) for guidance.

##How to Use
You need to npm install to install dependencies and create a folder for your database.
```
npm install

```
You need to use mongod to run this application. Please refer to documentation for installation and use [mongod documentation](https://docs.mongodb.org/manual/reference/program/mongod/)

Once mongod is installed you can point to a db path of your choosing or use the below command, to use a local folder that was created for you by npm install.

```
mongod --dbpath=./db

```
Start the server, this will tell you what port your server is running on. example 5555.
```
npm start

```

###Access API
start making requests. You can use [httpie](https://github.com/jkbrzt/httpie)

####POST
Add new crew member remember 5555 should be whatever port server said you were up on
```
http POST localhost:5555/api/crew name='William Adama' rank='Commander'  ship='Battlestar Galactica'
```
####GET
Get all crew members
```
http GET localhost:5555/api/crew

```
####PUT
Update a crew member, replace <id> with a specific crew members id you can see ID on the previous get request

```
http PUT localhost:5555/api/crew/<id>  name='William Adama' rank='Admiral' ship='Battlestar Galactica'
```
####DELETE
Delete crew member
```
http DELETE localhost:5555/api/crew/<id>
http DELETE localhost:5555/api/crew/571a85774968b5252b83dfd2

```

##Dev-Dependencies
* chai
* chai-http
* gulp
* gulp-eslint
* gulp-mocha
* mocha

##Dependencies
* hapi
* mongoose

##To test
npm test will run mocha. Gulp will lint and run mocha tests.
```
npm test
gulp
```

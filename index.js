var express = require('express');
var app = express();
var mongoose = require('mongoose');
var graphqlHTTP = require('express-graphql');
var graphql_schema = require('./schemas/graphql_schema.js');

app.get('/', function(req, res){
	res.send('Home');
});

app.use('/graphql', graphqlHTTP({
    schema: graphql_schema,
    debug: true,
    graphiql: true
})
);

app.listen(3001);
console.log('Started on port 3001');
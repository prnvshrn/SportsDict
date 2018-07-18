var mongoose = require('mongoose');
Football = require('./../models/Football.js');
mongoose.connect('mongodb://admin2:admin2@ds251240.mlab.com:51240/sports_compare'); 
var db = mongoose.connection;

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const FootballType = new GraphQLObjectType({
    name:'Football',
    fields:() => ({
        name:{type:GraphQLString},
        position:{type:GraphQLString},
		appearences:{type: GraphQLString},
		goals:{type: GraphQLString},
		shot_accuracy:{type: GraphQLString},
		chances_created:{type: GraphQLString},
		pass_accuracy:{type: GraphQLString},
		duels_won:{type: GraphQLString},
		defensive_actions:{type: GraphQLString},
		defensive_errors:{type: GraphQLString}
    })
})

const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        football:{
            type: new GraphQLList(FootballType),
            args:{
                name:{type:GraphQLString}
            },
            resolve(parentValue, args){
                var foundItems = new Promise((resolve, reject) => {
                    Football.find({'name':args.name},(err, todos) => {
                        err ? reject(err) : resolve(todos)
                    })
                })
                return foundItems
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
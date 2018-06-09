const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = graphql

const types = require('./types');
const sampleData = require('../model/sample.json');

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields:{
    sample:{
      type: types.SampleType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue,args){
        return sampleData.find(s=>s.id=args.id)
      }
    },
    samples:{
      type: GraphQLList(types.SampleType),
      args:{},
      resolve(parentValue,args){
        return sampleData
      }
    }
  }
})

module.exports = RootQueryType;
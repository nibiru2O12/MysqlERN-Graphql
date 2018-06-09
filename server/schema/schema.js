const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = graphql


const sampleData = [
  {
    id:1,
    name:"rj"
  },{
    id:2,
    name:"mitch"
  }
]

const SampleType = new GraphQLObjectType({
  name: "Sample",
  fields:{
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
})

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields:{
    sample:{
      type: SampleType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue,args){
        return sampleData.find(s=>s.id=args.id)
      }
    },
    samples:{
      type: GraphQLList(SampleType),
      args:{},
      resolve(parentValue,args){
        return sampleData
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQueryType
});
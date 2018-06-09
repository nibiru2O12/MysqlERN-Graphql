const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql

const SampleType = new GraphQLObjectType({
  name: "Sample",
  fields:{
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
});

module.exports = {
  SampleType
}
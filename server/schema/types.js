const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields:{
    id: { type: GraphQLInt },
    todo: { type: GraphQLString },
    done: { type: GraphQLInt }
  }
});

module.exports = {
  TodoType
}
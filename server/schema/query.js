const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} = graphql

const types = require('./types');
const pool = require('../dbconfig');

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields:{
    todos:{
      type: GraphQLList(types.TodoType),
      args: { id: { type: GraphQLInt } },
      resolve(parentValue,args){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,conn)=>{
            if(err) reject(err);
            conn.query('select * from todolist',(err,result)=>{
              if(err) reject(err);
              conn.release();
              resolve(result);
            })
          })
        })
      }
    },
    todo:{
      type: types.TodoType,
      args: { id: { type: GraphQLInt } },
      resolve(pv,args){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,conn)=>{
            if(err) reject(err);
            conn.query(`select * from todolist where id=${args.id}`,[args.id],(err,result)=>{
              if(err) reject(err);
              conn.release();
              resolve(result[0]);
            })
          })
        });
      }
    },
  }
})

module.exports = RootQueryType;
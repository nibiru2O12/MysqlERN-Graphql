const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
} = graphql

const pool = require('../dbconfig');
const types = require('./types');

const mutation = new GraphQLObjectType({
    name : "mutation",
    fields : {
        addTodo: {
            type: types.TodoType,
            args: {
                todo: { type: GraphQLString },
                done: { type: GraphQLBoolean },
            },
            resolve(pv,args){
                return new Promise((resolve,reject)=>{
                    pool.getConnection((err,conn)=>{
                        if(err) reject(err)
                        conn.query("insert into todolist set ?",args,(err,result)=>{
                            if(err) reject(err);
                            conn.release();
                            console.log(result)
                            resolve({id:result.insertId})
                        })
                    })
                })
            }
        },
        updateTodo : {
            type: types.TodoType,
            args: {
                id: { type: GraphQLInt },
                todo: { type: GraphQLString },
                done: { type: GraphQLBoolean },
            },
            resolve(pv,{id,todo,done}){
                return new Promise((resolve,reject)=>{
                    pool.getConnection((err,conn)=>{
                        if(err) reject(err);
                        conn.query(`update todolist SET todo=?, done=? where id=?`,[todo,done,id],(err,result)=>{
                            if(err) reject(err);
                            conn.release();
                            resolve(result.affectedRows > 0);
                        })
                    })
                })
            }
        },
        deleteTodo : {
            type: types.TodoType,
            args: { id: { type: GraphQLInt }},
            resolve(pv,args){
                return new Promise((resolve,reject)=>{
                    pool.getConnection((err,conn)=>{
                        if(err) reject(err);
                        conn.query('delete from todolist where id=?',[args.id],(err,result)=>{
                            if(err) reject(err);
                            conn.release();
                            resolve(err);
                        })
                    })
                })
            }
        }
    }
});

module.exports = mutation;
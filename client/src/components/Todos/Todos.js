import React, { Component } from 'react'
import gql from 'graphql-tag';
import {Query,graphql} from 'react-apollo';

const query = gql`
    {
        todos {
        id
        todo
        done
        }
    }
`

class Todos extends Component{

    constructor(props){
        super(props);
        this.input = React.createRef();
    }

    state = {
        todos : [
            {todo:"Sleep"},
            {todo:"Eat"},
        ],
        todo : ""
    }

    _handleChange = e => {
        this.setState({todo:e.target.value})
    }

    _handleSave = e =>{
        e.preventDefault();

        let todos = [...this.state.todos];
        todos.push({todo:this.state.todo})
        this.setState({todos,todo:""})
        
    }

    render(){
       
        return(
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this._handleSave}>
                    <input type="text" onChange={this._handleChange} value={this.state.todo} ref={this.input} />
                </form>
                <ul style={{maxWidth:"300px"}}>
                   <Query query={query}>
                         {({loading,data,error})=>{

                             if(error) return "error"
                             if(loading) return "loading..."

                             return data.todos.map(todo=>{
                                 return <Todo key={todo.id} todo={todo} />
                             })
                         }}
                   </Query>
                </ul>
            </div>
        )
    }
}

const Todo = props => {
    return <li 
                style={{position:"relative",padding:"10px",margin:"5px",border:"1px solid gray"}}
                >   
                {props.todo.todo}
                <a style={{color:"red",position:"absolute",right:"20px"}}>x</a>
            </li>
}

export default  graphql(query)(Todos);
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery.min.js';




const Todo = props=>{
    function onDeleteTodo(e){
        e.preventDefault();
        axios.delete(`http://localhost:5000/todos/delete/`)
        .then(()=>{
            window.alert('Deleted')
        })
        .catch(err=>window.alert('Delete failed'))
    }
    return (
    <tr>
        <td>{props.todos.username}</td>
        <td><a href={`#me${props.todos._id}`} data-toggle="collapse">{props.todos.heading}</a>
<div id={`me${props.todos._id}`} className="collapse" >{props.todos.description}</div>
        </td>
        <td>{props.todos.startdate.substring(0,10)}</td>
        <td>{props.todos.deadline.substring(0,10)}</td>
        <td>
            <Link to={`/mern-crud-app/edit/${props.todos._id}`} className="nav-link d-inline">Edit</Link>
            <a href={`#del${props.todos._id}`} data-toggle="collapse" className="nav-link d-inline">Delete</a>
            <div id={`del${props.todos._id}`} className="collapse">
                <form onSubmit={onDeleteTodo}>
                    <div className="form-group">
                        <input name="id" type="hidden" value={props.todos._id}/>
                        <input name="editpassword" type="password" className="form-control" placeholder="Insert password"/>
                        <input type ="submit" className="form-control btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </td>
    </tr>
)
}
export default function TodoList(){
    const [todos, setTodos]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/todos')
        .then(res=>{
            setTodos(res.data)
        })
        .catch(err=>console.log(err));

    })
    
  function list(){
        return todos.map((data)=>{
            return <Todo todos={data} key={data._id}/>
        })
    }


    
    return(
        <div className="container">
            <table className="table table-responsive-lg table-striped">
                <thead className="thead thead-light">
                    <tr>
                        <th>User name</th>
                        <th>Title/Description</th>                        
                        <th>Start date</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list()}               
                </tbody>
            </table>
        </div>
    )

}

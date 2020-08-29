import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery.min.js';


const Todo = props=>(
    <tr>
        <td>{props.todos.username}</td>
        <td><a href={`#me${props.todos._id}`} data-toggle="collapse">{props.todos.heading}</a>
<div id={`me${props.todos._id}`} className="collapse" >{props.todos.description}</div>
        </td>
        <td>{props.todos.startdate.substring(0,10)}</td>
        <td>{props.todos.deadline.substring(0,10)}</td>
        <td><Link to={`/mern-crud-app/edit/${props.todos._id}`} className="nav-link d-inline">Edit</Link><Link className="nav-link d-inline">Delete</Link></td>
    </tr>
)
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

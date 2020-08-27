import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Todo = props=>(
    <tr>
        <td>{props.todos.username}</td>
       <td><Link to={`/mern-crud-app/todo-details/${props.todos._id}`} className="nav-link">{props.todos.heading}</Link></td>
        <td>{props.todos.startdate.substring(0,10)}</td>
        <td>{props.todos.deadline.substring(0,10)}</td>
        <td><Link to={`/mern-crud-app/edit/${props.todos._id}`} className="nav-link">Action</Link></td>
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
            <table className="table table-responsive-lg table-hover">
                <thead className="thead thead-light">
                    <tr>
                        <th>User name</th>
                        <th>Title</th>                        
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

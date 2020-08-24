import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){

        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/mern-crud-app/" className="navbar-brand">tradecoder</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link to="/mern-crud-app/" className="nav-link">Todo List</Link></li>
                <li className="nav-item"><Link to="/mern-crud-app/add/" className="nav-link">Add Task</Link></li>
                <li className="nav-item"><Link to="/mern-crud-app/signup/" className="nav-link">Signup</Link></li>
            </ul>
        </nav>
        );    
}
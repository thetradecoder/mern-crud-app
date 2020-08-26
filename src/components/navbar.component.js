import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';


export default function Navbar(){

        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/mern-crud-app/" className="navbar-brand">tradecoder</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="true">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="main-menu" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to="/mern-crud-app/" className="nav-link">Todo List</Link></li>
                    <li className="nav-item"><Link to="/mern-crud-app/add/" className="nav-link">Add Task</Link></li>
                    <li className="nav-item"><Link to="/mern-crud-app/edit/" className="nav-link">Edit Task</Link></li>
                    <li className="nav-item"><Link to="/mern-crud-app/signup/" className="nav-link">Signup</Link></li>
                    <li className="nav-item"><Link to="/mern-crud-app/documents" className="nav-link">Documents</Link></li>
                </ul>
            </div>
        </nav>
        );    
}
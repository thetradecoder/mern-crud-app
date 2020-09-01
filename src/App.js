import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import TodoList from './components/todolist.component';
import AddTask from './components/addtask.component';
import EditTask from './components/edittask.component';
import Signup from './components/signup.component';
import Documents from './components/documents.component';
import Login from './components/login.component';

function App() {
  return (
    <Router>
      <Navbar />
      <h1 className="text-center">MERN Stack Todo App<br/> (under development)</h1>
      <Route path="/mern-crud-app/" exact component={TodoList} />
      <Route path="/mern-crud-app/add" component={AddTask}/>
      <Route path="/mern-crud-app/edit/:id" component={EditTask}/>
      <Route path="/mern-crud-app/signup" component={Signup}/>
      <Route path="/mern-crud-app/documents" component={Documents}/>
      <Route path="/mern-crud-app/login" component={Login}/>
    </Router>
  );
}

export default App;

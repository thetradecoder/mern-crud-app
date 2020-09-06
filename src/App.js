import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import TodoList from './components/todolist.component';
import AddTask from './components/addtask.component';
import EditTask from './components/edittask.component';
import Signup from './components/signup.component';
import Documents from './components/documents.component';

function App() {
  return (
    <Router>
      <Navbar />
      <h2 className="text-center">Task Management<br/></h2>
      <Route path="/mern-crud-app/" exact component={TodoList} />
      <Route path="/mern-crud-app/add" component={AddTask}/>
      <Route path="/mern-crud-app/edit/:id" component={EditTask}/>
      <Route path="/mern-crud-app/signup" component={Signup}/>
      <Route path="/mern-crud-app/documents" component={Documents}/>
      
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './components/navbar.component';
import AddTask from './components/addtask.component';


function App() {
  return (
    <Router>
      <Navbar />
      <h1 className="text-center">MERN Stack Todo App<br/> (under development)</h1>
      <Route path="/mern-crud-app/add" component={AddTask}/>
    </Router>
  );
}

export default App;

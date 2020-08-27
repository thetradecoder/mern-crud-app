import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Signup(){
    
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");


    function onChangeUsername(e){
        setUsername(e.target.value)
    }

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }

    function onSubmitUserInfo(e){
        e.preventDefault();
        const user = {
            username:username,
            email:email,
            password:password
        }
        axios.post('http://localhost:5000/users/signup', user)
        .then(res=>{
            setUsername("");
            setEmail("")
            setPassword(""); 
            window.alert(res.data);
            window.location = ('/mern-crud-app/add/');
        })
        .catch(err=>window.alert('Either username or email is already registered with us, or email address is incorrect,  try with different one'));        
    }

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={onSubmitUserInfo}>
                <div className="form-group">
                    <label>User name:</label>
                    <input type="text" minLength="5" className="form-control" value={username} onChange={onChangeUsername} required/>
                </div>
                <div className="form-group">
                    <label>User email:</label>
                    <input type="text" minLength="8" className="form-control" value={email} onChange={onChangeEmail} required/>
                </div>
                <div className="form-group">
                    <label>User password:</label>
                    <input type="text" minLength="8" className="form-control" value={password} onChange={onChangePassword} required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>

        </div>        
    );
}

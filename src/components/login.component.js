import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");

    
    function onChangeUsername(e){
        setUsername(e.target.value)
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }
    function onSubmitLogin(e){
        e.preventDefault();
        axios.get('http://localhost:5000/users/login')
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center">
            <form style={{width:"300px"}} onSubmit={onSubmitLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value = {username} onChange={onChangeUsername} className="form-control"/>
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value = {password} onChange={onChangePassword} className="form-control"/>
                </div>
                <input type="submit" value="Login" className="btn btn-dark form-control"/>
            </form>
        </div>
    )
}
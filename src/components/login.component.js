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

        const log_auth={
            username,
            password
        };

        axios.post('http://localhost:5000/users/login', log_auth)
        .then(res=>{
            if(res.data){
              setUsername(res.data.username)
            }
        })
        .then(()=>{
            axios.post('http://localhost:5000/todos/t', log_auth)
            .then(res=>console.log(res.data))
        })
        .catch(err=>err);
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
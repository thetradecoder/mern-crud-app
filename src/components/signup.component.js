import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup(){
    
    const [username, setUsername]=useState("");
    const [useremail, setUseremail]=useState("");
    const [userpassword, setUserpassword]=useState("");

    function onChangeUsername(e){
        setUsername(e.target.value)
    }

    function onChangeUserEmail(e){
        setUseremail(e.target.value)
    }

    function onChangeUserPassword(e){
        setUserpassword(e.target.value)
    }

    function onSubmitUserInfo(e){
        e.preventDefault();
        // copmlete this after the backend works
    }

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={onSubmitUserInfo}>
                <div className="form-group">
                    <label>User name:</label>
                    <input type="text" className="form-control" value={username} onChange={onChangeUsername} required/>
                </div>
                <div className="form-group">
                    <label>User email:</label>
                    <input type="text" className="form-control" value={useremail} onChange={onChangeUserEmail} required/>
                </div>
                <div className="form-group">
                    <label>User password:</label>
                    <input type="text" className="form-control" value={userpassword} onChange={onChangeUserPassword} required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>

        </div>        
    );



}

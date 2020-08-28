import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function EditTask(){
    
    const [username, setUsername]=useState("");
    const [heading, setHeading]= useState("");
    const [description, setDescription]= useState("");
    const [startdate, setStartdate]= useState("");
    const [deadline, setDeadline]= useState("");
    const [editpassword, setEditpassword]= useState("");

    const {id} = useParams();
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/todos/${id}`)
        .then(res=>{
            setUsername(res.data.username);
            setHeading(res.data.heading);
            setDescription(res.data.description);
            setStartdate(new Date(res.data.startdate));
            setDeadline(new Date(res.data.deadline));           
        })
        .catch(err=>console.log(err));

    })

    function onChangeHeading(e){
        setHeading(e.target.value)
    }

    function onChangeDescription(e){
        setDescription(e.target.value)
    }

    function onChangeStartDate(date){
        setStartdate(date)
    }

    function onChangeDeadline(date){
        setDeadline(date)
    }

    function onChangeEditPassword(e){
        setEditpassword(e.target.value)
    }

    function onEditSubmit(e){
        e.preventDefault();
        const updateData = {
            username,
            heading,
            description,
            startdate,
            deadline,
            editpassword
        }
        axios.post(`http://localhost:5000/todos/update/${id}`, updateData)
        .then(()=>{
            window.alert('Todo updated');
            window.location = ('/mern-crud-app/');
        })
        .catch(err=>window.alert('update failed'));
    }



    return(
        <div className="container">
            <h2 className="text-center">Edit Task</h2>
            <form onSubmit={onEditSubmit}>
                <div className="form-group">
                    <p>User name:<strong> {username} </strong> ** User_name not be changed</p>
                </div>
                <div className="form-group">
                        <label>Task heading</label>
                        <input type="text" className="form-control" value={heading} onChange={onChangeHeading} required />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea rows="3" cols="50" className="form-control" value={description} onChange={onChangeDescription} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Start date:</label> <br/>
                        <DatePicker selected={startdate} onChange={onChangeStartDate}/>
                    </div>
                    <div className="form-group">
                        <label>Deadline:</label><br/>
                        <DatePicker selected={deadline} onChange={onChangeDeadline} />
                    </div>
                    <div className="form-group">
                        <label>Password (Edit password that you put while creating this task):</label>
                        <input type="password" className="form-control" value={editpassword} onChange={onChangeEditPassword} required />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            </form>

        </div>

    );
}

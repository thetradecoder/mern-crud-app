import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import axios from 'axios';


export default function AddTask (){
   
        const [username, setUsername]=useState("");
        const [description, setDescription]=useState("");
        const [heading, setHeading] = useState("");
        const [startdate, setStartdate]= useState(new Date());
        const [deadline, setDeadline] = useState(new Date());
        const [editpassword, setEditpassword]=useState("");
        const [users, setUsers]=useState([]);

        useEffect(()=>{
            axios.get('http://localhost:5000/users')
            .then(res=>{
                if(res.data.username.length>0){
                    setUsers(res.data.username);                    
                }
            })
            .catch(err=>console.log(err))

        })

        function  onChangeUsername(e){
            setUsername(e.target.value)
        }
        
        function onChangeDescription(e){
            setDescription(e.target.value);
        }
        
        function onChangeHeading(e){
            setHeading(e.target.value)
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

        function onSubmitTask(e){
            e.preventDefault();
            const task = {
                username,
                heading,
                description,
                startdate,
                deadline,
                editpassword
            }

            axios.post('http://localhost:5000/todos/add', task)
            .then(()=>{
                window.alert('New task added');
                setUsername("");
                setHeading("");
                setDescription("");
                setStartdate(new Date());
                setDeadline(new Date());
                setEditpassword("");
            })
            .catch(err=>window.alert(err));

        }


        return(
            <div className="container">
                <h2 className="text-center">Add New Task</h2>
                <form onSubmit={onSubmitTask}>
                    <div className="form-group">
                        <label>User name:</label>
                       <select required className="form-control" value={username} onChange={onChangeUsername}>
                           {users.map(user=>{
                               return (
                               <option key={user} value={user}>{user}</option>
                               )
                           })}

                       </select>
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
                        <label>Edit Password :</label>
                        <input type="password" className="form-control" value={editpassword} onChange={onChangeEditPassword} required />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );

}   
   

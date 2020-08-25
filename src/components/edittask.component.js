import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditTask(){
    
    const [username]=useState("Registered User");
    const [taskheading, setTaskheading]= useState("");
    const [description, setDescription]= useState("");
    const [startdate, setStartdate]= useState(new Date());
    const [deadline, setDeadline]= useState(new Date());
    const [editpassword, setEditpassword]=useState("");

    function onChangeTaskHeading(e){
        setTaskheading(e.target.value)
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
        // complete this function after the backend work

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
                        <input type="text" className="form-control" value={taskheading} onChange={onChangeTaskHeading} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea rows="3" cols="50" className="form-control" value={description} onChange={onChangeDescription}></textarea>
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
                        <label>Edit Password:</label>
                        <input type="password" className="form-control" value={editpassword} onChange={onChangeEditPassword} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            </form>

        </div>

    );
}

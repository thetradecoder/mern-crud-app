import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';


export default function AddTask (){
   
        const [username, setUsername]=useState("");
        const [description, setDescription]=useState("");
        const [taskheading, setTaskheading] = useState("");
        const [startdate, setStartdate]= useState(new Date());
        const [deadline, setDeadline] = useState(new Date());

        function  onChangeUsername(e){
            setUsername(e.target.value)
        }
        
        function onChangeDescription(e){
            setDescription(e.target.value);
        }
        
        function onChangeTaskHeading(e){
            setTaskheading(e.target.value)
        }

        function onChangeStartDate(date){
            setStartdate(date)     
         }

         function onChangeDeadline(date){
            setDeadline(date)
        }


        return(
            <div className="container">
                <h2 className="text-center">Add New Task</h2>
                <form>
                    <div className="form-group">
                        <label>User name:</label>
                        <input type="text" className="form-control" value={username} onChange={onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label>Task heading</label>
                        <input type="text" className="form-control" value={taskheading} onChange={onChangeTaskHeading} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" value={description} onChange={onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Start date:</label> <br/>
                        <DatePicker selected={startdate} onChange={onChangeStartDate}/>
                    </div>
                    <div className="form-group">
                        <label>Deadline:</label><br/>
                        <DatePicker selected={deadline} onChange={onChangeDeadline} />
                    </div>
                </form>
            </div>
        );

}   
   

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';


export default class AddTask extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            description:"",
            startdate:new Date(),
            deadline: new Date()
        }

        this.onChangeUsername= this.onChangeUsername.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeStartDate= this.onChangeStartDate.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        

    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onChangeTaskHeading(e){
        this.setState({
            taskheading:e.target.value
        })
    }
    onChangeStartDate(date){
        this.setState({
            startdate:date
        })
    }
    onChangeDeadline(date){
        this.setState({
            deadline:date
        })
    }
   
    render(){
        return(
            <div className="container">
                <h2 className="text-center">Add New Task</h2>
                <form>
                    <div className="form-group">
                        <label>User name:</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label>Task heading</label>
                        <input type="text" className="form-control" value={this.state.taskheading} onChange={this.onChangeTaskHeading} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label>Start date:</label> <br/>
                        <DatePicker selected={this.state.startdate} onChange={this.onChangeStartDate}/>
                    </div>
                    <div className="form-group">
                        <label>Deadline:</label><br/>
                        <DatePicker selected={this.state.deadline} onChange={this.onChangeDeadline} />
                    </div>
                </form>
            </div>
        );
    }
}
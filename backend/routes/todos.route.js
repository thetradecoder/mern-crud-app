const router = require('express').Router();
const Todo = require('../models/todos.model');


router.route('/').get((req, res)=>{
    Todo.find({})
    .then(data=>res.json(data.map(d=>{return {
        username:d.username, 
        heading: d.heading, 
        description:d.description, 
        startdate:d.startdate, 
        deadline: d.deadline
    }})))
    .catch(err=>res.status(400).send(err));
});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const heading = req.body.heading;
    const description=req.body.description;
    const startdate = req.body.startdate;
    const deadline = req.body.deadline;
    const editpassword = req.body.editpassword;

    const newTodo = new Todo({username, heading, description, startdate, deadline, editpassword});
    newTodo.save()
    .then(()=>res.send('New task added'))
    .catch(err=>res.status(400).send(err))
});


module.exports = router;

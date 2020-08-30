const router = require('express').Router();
const Todo = require('../models/todos.model');


router.route('/').get((req, res)=>{
    Todo.find({})
    .then(data=>res.json(data.map(d=>d)))
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
    .catch(err=>res.status(400).send(err));
});

router.route('/:id').get((req,res)=>{
    Todo.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>res.status(400).send(err));
});


router.route('/update/:id').put((req, res)=>{
    Todo.findOne({_id:req.params.id, editpassword:req.body.editpassword})
    .then(data=>{
        data.username = req.body.username;
        data.heading = req.body.heading;
        data.description = req.body.description;
        data.startdate = req.body.startdate;
        data.deadline = req.body.deadline;

        data.save()
        .then(data=>res.send(data))
        .catch(err=>res.status(400).send(err))
    })
    .catch(err=>res.status(400).send(err));
});

router.route('/delete/:id').delete((req, res)=>{
    Todo.findOneAndDelete({_id:req.body.id, editpassword:req.body.editpassword})
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
})




module.exports = router;

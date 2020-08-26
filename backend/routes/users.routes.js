const router = require('express').Router();
let User = require('../models/users.model');



// get users data from localhost:5000/users/
router.route('/').get((req, res)=>{
 User.find({})
.then(data=>res.json({username:data.map(d=>d.username)}))
.catch(err=>res.status(400).send(err));
});


// post user data via localhost:5000/users/signup
router.route('/signup').post((req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({username, email, password});
    
    newUser.save()
    .then(()=>res.send('Signup successful'))
    .catch(err=>res.status(400).send(err))
});

module.exports = router;

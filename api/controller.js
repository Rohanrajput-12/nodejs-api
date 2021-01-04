const User = require('./model.js');

// Create and Save a new user
exports.create = (req, res) => {

     // Create a User
     var new_user = new User({
        First_Name: req.body.fname, 
        Last_Name: req.body.lname,
        Email_ID:req.body.emaild,
        Phone_No:req.body.phoneno,
        Image: Date.now()+req.file.originalname
    });

    // Save Note in the database
    new_user.save()
        .then(data => {
            
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

};

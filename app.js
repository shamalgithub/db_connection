const express = require('express');
const mongoose = require('mongoose');
const mocha = require('mocha');
const model = require('./Models/user_signup');
const user_data = require('./Models/user_signup');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result)=>{
    console.log("data base is connected");
    app.listen(5000, () => {
        console.log("the server is listenig ...");
    })

}).catch((error)=>{
    console.log("an error occured ---> " , error);
})



app.get('/add-users' , (req , res)=>{
    const user = new user_data({
        name:"kanishka de silva" ,
        email : "shamaldesilva6991@gmail.com"
    });
    user.save().then((result)=>{
        res.send(result);
        console.log(result)
    }).catch((error)=>{
        console.log("an error occured --->" , error);
    })
})

app.get('/all-user-data' ,  (req , res)=>{
    user_data.find().then((result)=>{
        res.send(result);
    })
})
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://Evan:Hello123@ds039231.mlab.com:39231/evansproject';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    Address: String,
    dateOfBirth: String
})
var TeacherSchema = new Schema({
    firstName: String,
    lastName: String,
    Address: String,
    dateOfBirth: String
})
var StudentModel = mongoose.model('student', StudentSchema);
var TeacherModel = mongoose.model('teacher', TeacherSchema);



//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/name', function (req, res) {
    res.send("Hello you sent " +
        req.body.firstName + " " +
        req.body.lastName + " " +
        req.body.Address + " " +
        req.body.dateOfBirth);
})

app.get('/', function (req, res) {
    res.send('Hello from Express');
})

app.post('/api/students', function (req, res) {
    console.log("post successful");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.Address);
    console.log(req.body.dateOfBirth);

    StudentModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Address: req.body.Address,
        dateOfBirth: req.body.dateOfBirth
    });
    res.send('Item added');


})

app.get('/api/students', function (req, res) {
    StudentModel.find(function (err, data) {
        res.json(data);
    });
})

app.get('/api/students/:id', function (req, res) {
    console.log("Read post " + req.params.id);

    //PostModel.find({_id : req.params.id}, 
    StudentModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/students/:id', function (req, res) {
    console.log("Update Student" + req.params.id);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.Address);
    console.log(req.body.dateOfBirth);


    StudentModel.findByIdAndUpdate(req.params.id, req.body,
        function (err, data) {
            res.send(data);
        })
})

app.delete('/api/students/:id', function (req, res) {
    console.log(req.params.id);

    StudentModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.send(err);
            res.send(data);
        })
})


app.post('/api/teachers', function (req, res) {
    console.log("post successful");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.Address);
    console.log(req.body.dateOfBirth);

    TeacherModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Address: req.body.Address,
        dateOfBirth: req.body.dateOfBirth
    });
    res.send('Item added');


})

app.get('/api/teachers', function (req, res) {
    TeacherModel.find(function (err, data) {
        res.json(data);
    });
})

app.get('/api/teachers/:id', function (req, res) {
    console.log("Read post " + req.params.id);

    //PostModel.find({_id : req.params.id}, 
    TeacherModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/teachers/:id', function (req, res) {
    console.log("Update Teacher" + req.params.id);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.Address);
    console.log(req.body.dateOfBirth);


    TeacherModel.findByIdAndUpdate(req.params.id, req.body,
        function (err, data) {
            res.send(data);
        })
})

app.delete('/api/teachers/:id', function (req, res) {
    console.log(req.params.id);

    TeacherModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.send(err);
            res.send(data);
        })
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
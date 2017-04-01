console.log('starting up...');

// Create the Web & Socket Servers
var express = require("express");
var app = express();
var http = require("http").Server(app);
const chokidar = require('chokidar');

var watcher = chokidar.watch("./public", {
    ignored: /[\/\\]\./,
    persistent: true
});




var io = require("socket.io")(http);


io.on("connection", function (socket) {
    console.log("Socket connected!");
    socket.join("clients");
});

// Libraries
var path = require("path");
var fs = require("fs");
var XLSX = require('xlsx');

// Register Static Conent Location
app.use(express.static(path.join(__dirname, 'public')));

// Server Endpoints
app.get("/", function (req, res) {

});

app.get("/data", function (req, res) {

    //Read excel and return data
    var workbook = XLSX.readFile('Roadmap Pivot.xlsx');
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(function (y) { /* iterate through sheets */
        var worksheet = workbook.Sheets[y];
        var json = XLSX.utils.sheet_to_json(worksheet);

        res.send(json);
    });

});

app.get("/helloWorld", function (req, res) {
    // res.send("hello world!!!!");
    io.to("clients").emit("helloWorld");
});

app.get("/refresh",function(req,res){
    io.to("clients").emit("refresh");
    res.send("refresh!");
});

http.listen(3000, function () {
    console.log("Listening on port 3000");

});

// Add event listeners. 
watcher
    .on('ready', path => {
        watcher.on('change', path => { //wait for initial scan to complete before adding watcher
            console.log(`File ${path} has been changed`);
            
            //Tell clients to refresh
            io.to("clients").emit("refresh");

        })
    });

function jsonTod3(json) {
    // {"Project Name":"Patient Safety","Label":"Present Findings @ Medstar","Start":"3/1/17","Type":"Milestone"}

    var output = [];

    json.forEach(item => {
        var newItem = {
            label: item['Project Name']
        };
        console.log(newItem);
    });
}


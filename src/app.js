const express = require('express');
const app = express(); //create an instance of express

app.use("/hello",(req,res) => { //this function is called request handler
    res.send("Hello Hello!"); 
})

app.use("/",(req,res) => { //this function is called request handler
    res.send("Hello /!"); 
})

app.use("/test",(req,res) => { //this function is called request handler
    res.send("Hello from the server!"); 
})

app.listen(7777 , () => {
    console.log("Server is successfully listening on port 3000....");
}); //listen incoming requests on port 3000

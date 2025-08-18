const express = require('express');
const app = express(); //create an instance of express



app.use("/user", (req,res) => {
    res.send("HAHAHAHAHA")
})

//This will only handle GET call to /user
app.get("/user", (req, res) => {
    //console.log(req.query)
    res.send({firstName : "Aditya", lastName : "Chauhan"})
})

app.post("/user",(req,res) => {
    //saving data to DB
    res.send("Data successfully saved to the Database")
})

app.delete("/user",(req,res) => {
    res.send("Deleted Successfully")
})

//This will match all the HTTP method API Call to /hello
app.use("/hello",(req,res) => { //this function is called request handler
    res.send("Hello Hello!"); 
})

app.use("/hello/2",(req,res) => { //this function is called request handler
    res.send("Hello abc!"); 
})

app.use("/test",(req,res) => { //this function is called request handler
    res.send("Hello from the server!"); 
})

app.use("/",(req,res) => { //this function is called request handler
    res.send("Hello /!"); 
})


app.listen(7777 , () => {
    console.log("Server is successfully listening on port 7777....");
}); //listen incoming requests on port 3000

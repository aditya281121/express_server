const express = require('express');
const app = express(); //create an instance of express



/* Middlewares & Error Handlers */

const {adminAuth, userAuth} = require("./middlewares/auth")

//Handle Auth Middleware for all GET,POST , .... requests
app.use("/admin",adminAuth)

app.get("/user/login", (req,res) => {
    res.send("User logged in Successfully")
})

app.get("/user/data", userAuth, (req,res) => {
    res.send("User Data Sent")
})

app.get("/admin/getAllData", (req , res) => {
    
        res.send("All data send")
    
})


app.get("/admin/deleteUser", (req, res) => {
    
          res.send("Deleted a User")
    
})


//GET /users => middleware chain => request handler
// It checks all the app.xxx("matching route") functions

app.use("/", (req, res, next) => { //middleware function
    //res.send("Handling / route")
    next()    
})

app.get("/user", (req,res,next) => { //middleware function
    console.log("Handling /user route")
    next()
},
  (req,res,next) => { //request handler
    res.send("1st Route Handler")
},
   (req,res,next) => {
    res.send("2nd Route Handler") //request handler
}
)


//We can have multiple route handers for a single route
//app.use("/route", rH, [rH1,rH2], rH3 , rH5)
app.use("/user", [(req, res, next) => {
    //Route Handler
   // res.send("Route Handler1")
   console.log("Handeling the route user 1!!")
   //res.send("1st Response!!")
   next()
   
} ,
 (req , res,next) => {
    //route handler 2
   console.log("Handeling the route user 2!!")
   //res.send("2nd Response!!")
   next()
}],  
   (req , res, next) => {
    //route handler 3
   console.log("Handeling the route user 3!!")
   //res.send("3rd Response!!")
   next()
},  
    (req , res, next) => {
    //route handler 4
   console.log("Handeling the route user 4!!")
   //res.send("4th Response!!")
   //next()
} );
//Error - Cannot set headers after they are sent to the client - as tcp connection is closed



/*  Routing and request handlers 
app.get("/user/:userId/:name/:password",(req,res) => {
    console.log(req.params);
    res.send({firstName : "Aditya", lastName : "Chauhan"});
})

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
}) */


app.listen(7777 , () => {
    console.log("Server is successfully listening on port 7777....");
}); //listen incoming requests on port 3000

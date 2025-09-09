-Create a repository
-Initialize the repository
-node_modules, package.json, package-lock.json
-Install express
-Create a server
-Listen to port 7777
-Write request handlers for /test , /hello
-Install nodemon and update scripts inside package.json
-What are dependencies
- What is the use of "-g" while npm install
-Difference between caret and tilde (^ vs ~)

-Initialize git
-.gitignore
- create a remote repo on github 
- push all code to remote origin
-Play with routes and route extensions ex. /hello , / , hello/2 ,/xyz
-Order of the routes matter a lot

-Install Postman app and  make a workspace/collection > test API call
-Write logic to handle GET, POST, PATCH, DELETE API Calls and test them on POSTMAN
-Explore routing and use of ?,+,(), * in the routes
-Use of regex in routes /a/, /.*fly$/
-Reading the query params in the routes
-Reading the dynamic routes

-Multiple Route Handlers (nested) - Play with the code do above and below 
-next()
-next function and errors along with res.send()
-app.use("/route" , rH, [rH2,rH3], rH4, rH5);
- What is middleware? Why do we need it?
- How expressJS basically handles requests behind the scenes
- Difference app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for user routes, except /user/login
- Error handling using app.use("/", (err,req, res, next) => {})

- Create a free cluster on MongoDb official website (MongoAtlas)
- Install mongoose library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDb function and connect to Database before starting the application on 7777
- Create a userSchema & user Model
- Create a POST/signup API to add data to database
- Push some documents using API calls from postman
- Error handling using try,catch


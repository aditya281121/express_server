const adminAuth = (req , res, next) => {
    console.log("Admin auth is getting checked")
   //Logic of checking if the request is authorized or not
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if( !isAdminAuthorized) {
       res.status(401).send("Unauthorzed Access")
    }
    else {
       next()
    }
};

const userAuth = (req , res, next) => {
    console.log("User auth is getting checked")
   //Logic of checking if the request is authorized or not
    const token = "xyz123"
    const isAdminAuthorized = token === "xyz"
    if( !isAdminAuthorized) {
       res.status(401).send("Unauthorzed Access")
    }
    else {
       next()
    }
};

module.exports = {
    adminAuth,
    userAuth,
};
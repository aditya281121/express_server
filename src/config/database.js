const mongoose = require('mongoose')

const connectDB = async () => {
await mongoose.connect("mongodb+srv://namastedev:EXmluenqoodn12@namastenode.rmuaheq.mongodb.net/devTinder?retryWrites=true&w=majority&appName=NamasteNode");
};

module.exports = connectDB;



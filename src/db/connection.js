const mongoose = require('mongoose');

// const DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zps3ogs.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(process.env.DB,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection to database is successful");
}).catch((err) => {
    console.log(`${err} : connection failed!....`);
});
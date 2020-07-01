const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

mongoose.connect(process.env.DB_LOCAL, {
        // some options to deal with deprecated warning, you don't have to worry about them.
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to database"))
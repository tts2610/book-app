const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const express = require("express")

mongoose.connect(process.env.DB_LOCAL, {
        // some options to deal with deprecated warning, you don't have to worry about them.
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log("connected to database"))

const bodyParser = require('body-parser');
const { createUser, readUser, updateUser } = require("./controllers/userController");
const { readGenre } = require("./controllers/genreController");
const app = express();
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// use router
app.use(router);

router.route("/").post(createUser)

router.route("/users").get(readUser)

// router.route("/genres").get(readGenre)

router.route("/user/:id").put(updateUser)

app.listen(process.env.PORT, () => {
    console.log("server running")
})
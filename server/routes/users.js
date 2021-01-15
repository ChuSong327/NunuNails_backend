const express = require("express");
const router = express.Router();

const Users = require("../../db/users");

router.get("/", (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json("This is the error: ", err)
        })
});

router.post("/signup", (req, res) => {
    Users.create(req.body)
        .then(() => {
            res.json("Added successfully!")
        })
        .catch(err => {
            res.json("This is the error: ", err)
        })
});

module.exports = router;
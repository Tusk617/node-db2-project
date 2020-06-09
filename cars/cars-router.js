const express = require("express");
const knex = require("knex");

const db = require("../data/connections.js");

const router = express.Router();

router.get("/", (req, res) => {
    db.select("*").from("cars")
    .then(cars => {
        res.json(cars);
    })
    .catch(error => {
        res.json(error.message)
    })
})

router.post("/", (req, res) => {
    const newCar = req.body;
    db.select("cars").insert(newCar)
    .then(newCarEntry => {
        res.status(200).json(newCarEntry);
    })
})

module.exports = router;

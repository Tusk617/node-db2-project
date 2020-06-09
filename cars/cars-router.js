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
    db("cars").insert(newCar)
    .then(newCarEntry => {
        res.status(200).json(newCarEntry);
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

router.put("/:id", (req, res) => {
    db("cars").update(req.body)
    .where({id: req.params.id})
    .then(updatedCar => {
        res.status(202).json(updatedCar);
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

router.delete("/:id", (req, res) => {
    db.select("*").from("cars").where({id: req.params.id})
    .then(deletedCar => {
        db("cars").del().where({id: req.params.id})
        .then(car => {
            console.log(deletedCar)
            res.status(200).json(deletedCar);
        })
    })
})

module.exports = router;

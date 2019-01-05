const db = require("../models")

module.exports = {
    
    findAll: (req,res) => {
        db.Game
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Game
        find(req.params.id)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Game
        .create(req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Game
        .findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Game
        .findById({_id: req.params.id})
        .then(dBModel => dBModel.remove())
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    }
};
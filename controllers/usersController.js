const db = require("../models")

module.exports = {
    
    findAll: (req,res) => {
        db.User
        .find(req.query)
        .sort({ name: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.User
        findById(req.params.id)
        // .populate({
        //     path: 'stats',
        //     select: 'points'
        // })
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.User
        .create(req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.User
        .findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.User
        .findById({_id: req.params.id})
        .then(dBModel => dBModel.remove())
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    }
};
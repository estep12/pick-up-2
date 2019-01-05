const db = require("../models")

module.exports = {
    
    findAll: (req,res) => {
        db.Stats
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Stats
        find(req.params.id)
        // .populate({
        //     path: 'users',
        //     select: 'userName'
        // })
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Stats
        .create(req.body)
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Stats
        .findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.Stats
        .findById({_id: req.params.id})
        .then(dBModel => dBModel.remove())
        .then(dBModel => res.json(dBModel))
        .catch(err => res.status(422).json(err));
    }
};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema ({
    points: {
        type: Number,
        default: 0
    },

    gamesPlayed:{ 
        type: Number,
        default:0
    },

    rebounds: {
        type: Number,
        default: 0
    },

    assists: {
        type: Number,
        defautl: 0
    },

    steals: {
        type: Number,
        default: 0
    },

    wins: {
        type: Number,
        default: 0
    },

    loses: {
        type: Number,
        default: 0
    },

    users: [{type: Schema.Types.ObjectId, ref: "User"}]
},

{ timestamps: true });


const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;
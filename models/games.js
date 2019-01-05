const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema ({
    date: Date,

    score: {
        type: Number,
        default: 0,
        required: [true]
    },

    users: [{type: Schema.Types.ObjectId, ref: "User"}],
    stats: [{type: Schema.Types.ObjectId, ref: "Stats"}]

},
{timestamps: true });

const Game = mongoose.model("Game", gameSchema);

module.exports = Game
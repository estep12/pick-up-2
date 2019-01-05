const router = require("express").Router();
const gamesRoute = require("./games");
const statsRoute = require("./stats");
const usersRoute = require("./users");

//Games Route
router.use("/games", gamesRoute);

//Stats Route
router.use("/stats", statsRoute);

//Users Route
router.use("/users", usersRoute);

module.exports = router;
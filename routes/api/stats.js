const router = require("express").Router();
const statsController = require("../../controllers/statsController");

router.route("/")
    .get(statsController.findAll)
    .post(statsController.create);

router.route("/:id")
    .get(statsController.findById)
    .put(statsController.update)
    .delete(statsController.remove);


module.exports = router;
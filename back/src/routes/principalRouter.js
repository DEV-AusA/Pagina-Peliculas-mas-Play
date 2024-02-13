const { Router } = require("express");

const { principalController } = require("../controllers/principalController");
const { moviesRouter } = require("./moviesRouter");

const router = Router();

router.get("/", principalController);
//creo y derivo 1 enrutador para cada entidad, del principalRouter a su EndPoint declarado
router.use("/movies", moviesRouter);
// ejem 2
// router.use("/trailers", trailersRouter);

module.exports = {
    router
};
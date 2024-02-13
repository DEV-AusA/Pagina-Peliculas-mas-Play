const express = require("express");
const { router } = require("../routes/principalRouter");

const app = express();

app.use(router);

module.exports = {
    app
};
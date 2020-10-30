const authController = require("../controllers/AuthController");

module.exports = (app) => {

    app.get("/",(req, res) => {
        res.send("Index")
    });

    app.post("/login", authController.login);

}
const TokenController = require("../controllers/TokenController");
const userController = require("../controllers/UsersController");

module.exports = (app) => {

    app.get("/users", (req, res) => TokenController.checkToken(req, res , userController.listUsers));

    app.get("/users/:id", (req, res) => TokenController.checkToken(req, res , userController.singleUser));

    app.post("/users/create", (req, res) => TokenController.checkToken(req, res , userController.createUser));

    app.put("/users/update/:id", (req, res) => TokenController.checkToken(req, res , userController.updateUser));

    app.delete("/users/delete/:id", (req, res) => TokenController.checkToken(req, res , userController.deleteUser));

}
const TokenController = require("../controllers/TokenController");
const userController = require("../controllers/UsersController");

module.exports = (app) => {

    app.get("/users", userController.listUsers);

    app.get("/users/:id", userController.singleUser);

    app.post("/users/create", userController.createUser);

    app.put("/users/update/:id", userController.updateUser);

    app.delete("/users/delete/:id", userController.deleteUser);

}
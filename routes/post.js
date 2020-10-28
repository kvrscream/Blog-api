const token = require("../controllers/TokenController");
const postController = require("../controllers/PostagemController");
const TokenController = require("../controllers/TokenController");


module.exports = (app) =>{

    app.get("/posts", postController.listPosts);

    app.get("/posts/:id", postController.singlePost);

    app.post("/post/create", TokenController.checkToken, postController.createPost);

    app.put("/post/update/:id", TokenController.checkToken, postController.updatePost);

    app.delete("/post/delete/:id", TokenController.checkToken, postController.delete);

}
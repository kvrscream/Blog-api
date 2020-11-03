const token = require("../controllers/TokenController");
const postController = require("../controllers/PostagemController");
const TokenController = require("../controllers/TokenController");


module.exports = (app) =>{

    app.get("/posts", postController.listPosts);

    app.get("/posts/:id", postController.singlePost);

    app.post("/post/create", (req,res) => TokenController.checkToken(req, res, postController.createPost));

    app.put("/post/update/:id", (req,res) => TokenController.checkToken(req, res, postController.updatePost));

    app.delete("/post/delete/:id", (req,res) => TokenController.checkToken(req, res, postController.delete));

}
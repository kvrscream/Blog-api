const mongoose = require("mongoose");
const Posts = mongoose.model("Post")


module.exports = {
    
    async listPosts(req, res){
        let posts = await Posts.find().limit(10);

        res.json({
            status: 200,
            posts: posts
        });
    },

    async singlePost(req, res){
        let id = req.params.id;

        let post = await Posts.findOne(id);

        res.json({
            status: 200,
            post: post
        });
    },

    async createPost(req, res){

        try {
            let newPost = Posts.create(req.body);
            res.json({
                status: 200,
                post: post,
                message: "Postado com sucesso!"
            });
        } catch(erro){
            console.log("ex=>", erro)
        }

    },

    async updatePost(req, res){
        try {
            let id = req.params.id;

            let postUpdated = await Posts.findByIdAndUpdate(id, req.body, {new: true});

            res.json({
                status: 200,
                message: "Atualizado com sucesso!",
                post: postUpdated
            })

        } catch(erro){
            console.log("ex=>", erro)
        }
    },

    async delete(req, res){
        try {
            let id = req.params.id;

            await Posts.findByIdAndDelete(id);

            res.json({
                status: 200,
                message: "Excluido com sucesso!"
            })

        } catch(erro){
            console.log("ex=>", erro)
        }
    }

}
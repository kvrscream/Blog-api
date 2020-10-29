const mongoose = require("mongoose");
const User = mongoose.model("user");
const crypto = require("crypto");


module.exports = {

    async listUsers(req, res){
        let users = await User.find();

        res.json({
            status: 200,
            users: users
        });
    },

    async singleUser(req, res){
        let user = await User.findOne(req.params.id);

        res.json({
            status: 200,
            users: user
        });
    },

    async createUser(req, res){
        try{
            let pwd = crypto.createHash("md5").update(req.body.password).digest("hex");
            req.body.password = pwd;
            let newUser = await User.create(req.body);
            
            if(newUser){
                res.json({
                    status: 200,
                    message: "Salvo com sucesso!",
                    user: newUser
                });
            } else {
                res.json({
                    status: 301,
                    message: "Um erro ocorreu"
                });
            }
        }catch(erro){
            console.log(erro);
        }
    },

    async updateUser(req, res){
        try{
            let pwd = crypto.createHash("md5").update(req.body.password).digest("hex");
            req.body.password = pwd;
            
            let updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(updateUser){
                res.json({
                    status: 200,
                    message: "Atualizado com sucesso!",
                    user: updateUser
                });
            } else {
                res.json({
                    status: 301,
                    message: "Um erro ocorreu"
                });
            }
        }catch(erro){
            console.log(erro);
        }
    },
    
    async deleteUser(Req, res){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.json({
                status: 200,
                message: "Usuário removido com sucesso!"
            })
        }catch(erro){
            console.log(erro);
        }
    }

}
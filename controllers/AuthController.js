const mongoose = require("mongoose");
const User = mongoose.model("user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

module.exports = {

    async login(req, res){
        let hash = crypto.createHash("md5").update(req.body.password).digest("hex");
        let filtro = {
            email: req.body.email,
            password: hash
        }

        let user = await User.findOne(filtro);

        if(user != null){
            delete user.password;
            let token = jwt.sign({
                data:{
                    user
                }
            },
                process.env.TKSECRET,
                {expiresIn: "2h"}
            );

            res.json({
                status: 200,
                token: token
            });

        } else {
            res.json({
                status:400,
                message: "Usuário não encontrado em nossa base de dados!"
            });
        } 

    }

}
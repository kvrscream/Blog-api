const jwt = require("jsonwebtoken");


module.exports = {

    async checkToken(req, res){
        let token = req.headers && req.headers["x-token-auth"] ? req.headers["x-token-auth"] : undefined;

        if(token){
            jwt.verify(token, process.env.TKSECRET, async (erro, decoded) =>{
                if(erro){
                    if(erro.name && err.name == "TokenExpiredError"){
                        res.json({
                            status: 401,
                            message: "Token Expirado!"
                        })
                    } else {
                        res.json({
                            status: 401,
                            message: "Token inválido!"
                        }) 
                    }
                } else if(decoded){
                    next(req, res);
                }
            });
        } else {
            res.json({
                status: 401,
                message: "Você não tem autorização para este módulo!"
            })
        }
    }

}
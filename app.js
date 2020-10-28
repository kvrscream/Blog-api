const app = require("./config/server");

let port = process.env.PORT || 4005;

app.listen(port, () => {
 console.log("Backend Blog na porta " + port)
});
const express = require("express");
Const path = require ("path");
 
const app = express();

Const public path = path.resolve(__dirname,"public")
 
app.use(publicpath.express.static('static');
 
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
 
app.listen(3000, ()=>console.log("App Stated on PORT 3000");

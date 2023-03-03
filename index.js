const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

const items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({encoded:true}));
app.use(express.static("public"));
app.get("/",function(req, res){
let day = date();

res.render("list", {kind: day, items: items});

});

app.post("/", function(req,res){
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen("3000", function(){
    ("server is sprinting on server 3000...........");
});
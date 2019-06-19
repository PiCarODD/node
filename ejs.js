/*
* @Author: root
* @Date:   2019-06-17 20:45:52
* @Last Modified by:   root
* @Last Modified time: 2019-06-17 21:14:17
*/
var express = require('express');
var app = express();
var port = 3000;
app.get("/",function(req,res){
	res.render('home.ejs')
});
app.get("/fallinlovewith/:thing",function(req,res){
	var thingvar = req.params.thing;
	res.render('love.ejs',{thing:thingvar})
})
app.listen(port,() => console.log("Server started!"));

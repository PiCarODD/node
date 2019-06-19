/*
* @Author: root
* @Date:   2019-06-18 09:07:35
* @Last Modified by:   root
* @Last Modified time: 2019-06-18 09:30:23
*/
var express = require('express');
var app = express();
var port = 3000;
app.use(express.static("public"));//style callable public
app.set('view engine','ejs')//callable without ejs ext
app.get("/post",function(req,res){
	var posts = [
		{title:"Hello World",authour:"Hein Htet Aung"},
		{title:"Hello World1",authour:"Hein Htet "},
		{title:"Hello World2",authour:"Hein Aung"}
	];
	res.render("post",{posts:posts})
})
app.listen(port,() => console.log("Server Started"));

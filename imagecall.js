/*
* @Author: root
* @Date:   2019-06-18 13:35:23
* @Last Modified by:   root
* @Last Modified time: 2019-06-19 10:05:31
*/
var express = require('express')
var app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
var port = 3000;
app.get("/",function(req,res){
	res.send("Welcome from my home page")
})
app.get("/gallery",function(req,res){
	var images = [
		{name:"Flower",url:"https://spotlights-feed.github.com/spotlights/supertuxkart/supertuxkart.jpg"},
		{name:"Cars",url:"https://spotlights-feed.github.com/spotlights/supertuxkart/supertuxkart.jpg"}
	]
	res.render('image',{images:images});
})
app.listen(port,() => console.log('Running at port 3000'));

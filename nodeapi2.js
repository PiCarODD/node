/*
* @Author: root
* @Date:   2019-06-18 11:20:28
* @Last Modified by:   root
* @Last Modified time: 2019-06-18 13:27:00
*/
var express = require('express');
var app = express();
var port = 3000;
var request = require('request')
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs')
app.get("/results",function(req,res){
	var search1 = req.query.msearch;
	var url = "http://www.omdbapi.com/?s="+search1+"&apikey=f5b499d7";
	request(url,function(error,response,body){
		var parsedata = JSON.parse(body)
		res.render("movie",{parsedata:parsedata});
	})
})
app.listen(port,() => console.log('Starting!'));
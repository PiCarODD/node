/*
* @Author: root
* @Date:   2019-06-18 09:50:26
* @Last Modified by:   root
* @Last Modified time: 2019-06-18 10:17:47
*/
var express = require('express')
var app = express();
var port = 3000;
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine','ejs')
var friends = ['HHA','PPH','KKW'];
app.get("/" , function(req,res){
	res.render('home');
})
app.get("/firend" ,function(req,res){
	res.render("friends",{friends: friends})
})
app.post("/addfriend" , function(req,res){
	var newfirend = req.body.fname;
	friends.push(newfirend);
	res.redirect('firend')
})
app.listen(port, () => console.log('Started!'));
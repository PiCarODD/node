/*
* @Author: root
* @Date:   2019-06-18 09:40:17
* @Last Modified by:   root
* @Last Modified time: 2019-06-18 09:48:08
*/
var express = require('express');
var app = express();
var port = 3000;
app.use(express.static('public'))//css dir callable from glob
app.set('view engine','ejs')
app.get('/home',function(req,res){
	res.render('home')
})
app.listen(port,() => console.log('Server starting!'));
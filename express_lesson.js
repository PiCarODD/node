/*
* @Author: root
* @Date:   2019-06-17 15:53:23
* @Last Modified by:   root
* @Last Modified time: 2019-06-17 16:13:26
*/
var express = require('express')
var app = express();
var port = 3000;
app.get("/",function(req,res){
	res.send("Welcome To My Website!")
});
app.get("/speak/:animal",function(req,res){
	var animal = req.params.animal;
	if(animal == 'dog'){
		res.send("The Dog Say : 'Woof Woof'")
	}
	if(animal == 'cat'){
		res.send("The cat Say : 'Meow Meow'")
	}
	if(animal == 'pig'){
		res.send("The pig Say : 'Oink Oink'")
	}
	else{
		res.send("Wtf You Enter!")
	}
});
app.get("/repeat/:say/:counts",function(req,res){
	var say = req.params.say;
	var count = Number(req.params.counts);
	var result = ""
	for(var i = 0 ;i < count; i++){
		result = result +'<br>'+ say
	}
	res.send(result)
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
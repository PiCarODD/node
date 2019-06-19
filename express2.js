/*
* @Author: root
* @Date:   2019-06-17 15:44:35
* @Last Modified by:   root
* @Last Modified time: 2019-06-17 15:52:23
*/
//Dir tutorials
var express = require('express')
var app = express()
var port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/dog', function(req, res) {
	res.send('<h1>Hello wtf!<h1>')
});
app.get('/logout', function(req, res) {
	res.send('<h1>Bye Bye<h1>')
});
app.get('/flag', function(req, res) {
	res.send('<h1>wabctf{node_js_love}<h1>')
});
app.get('/r/:subredditName', function(req, res) {
	var reddit = req.params.subredditName
	res.send('Welcome Subreddit '+reddit);
});
app.get('/r/:subredditName/comments/:id/:title/', function(req, res) {
	var title = req.params.title
	res.send('Welcome commenters title = '+title);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
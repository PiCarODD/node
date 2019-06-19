/*
* @Author: root
* @Date:   2019-06-17 15:01:58
* @Last Modified by:   root
* @Last Modified time: 2019-06-18 09:14:49
*/
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
app.get('*', function(req, res) {
	res.send('Hacker on my Website :O ')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
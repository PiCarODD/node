/*
* @Author: root
* @Date:   2019-06-18 10:42:38
* @Last Modified by:   root
* @Last Modified time: 2019-06-18 11:20:15
*/
var request = require('request')
request("http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22",function(error,response,body){
	var parsedata =JSON.parse(body);
	console.log(parsedata["weather"][0]["description"]);
})
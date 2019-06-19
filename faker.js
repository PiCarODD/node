/*
* @Author: root
* @Date:   2019-06-17 14:47:56
* @Last Modified by:   root
* @Last Modified time: 2019-06-17 14:59:13
*/
var fake = require('faker');
console.log('===============================');
console.log('=       Welcome To My Shop    =');
console.log('===============================');
for(var i = 0;i < 10;i++){
	console.log(fake.commerce.productName() + ' - $' + fake.commerce.price());
}
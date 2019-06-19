/*
* @Author: root
* @Date:   2019-06-17 14:22:35
* @Last Modified by:   root
* @Last Modified time: 2019-06-17 14:32:02
*/
var scores = [90, 98, 89, 100, 100, 86, 94]
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63,95,49]
function average(score){
	var len = score.length;
	var total = 0;
	// for(var i = 0;i < len; i++){
	// 	total = total + score[i]
	// }
	score.forEach(function(score){
		total += score
	})
	console.log(Math.round(total/len))
}
average(scores);
average(scores2);
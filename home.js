// function fnt() {
// 	var i = 0,j = 0;
// 	console.log('http://www.zhihu.com/question/22146521');//home test
// 	console.log(i++);
// 	console.log(++j);
// }
// fnt();
// var fs = require('fs');
// function copy(src,dst){
// 	fs.writeFileSync(dst,fs.readFileSync(src));
// }
// function main(argv){
// 	copy(argv[0],argv[1]);
// }
// console.log(process.argv[0],process.argv[1]);
// main(process.argv.slice(2));
var fs = require('fs');
function copy(src,dst){
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv){
	copy(argv[0],argv[1]);
}
console.log("exe file path:"+process.argv[0],"main path:"+process.argv[1]);
main(process.argv.slice(2));

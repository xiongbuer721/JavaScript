//生成10个方块，随机生成颜色
//获取容器
var container=document.getElementById('container');
//数组，存储创建的方块对象
var array=[];
for(var i=0;i<10;i++){
	var r=tools.getRandom(0,255);
	var g=tools.getRandom(0,255);
	var b=tools.getRandom(0,255);
	var box=new Box(container,{
		backgroundColor:'rgb('+r+','+g+','+b+')'
	});
	//把创建好的方块对象，添加到数组中
	array.push(box);
}



//设置随机位置，开启定时器
setInterval(function() {
	//随机生成方块的坐标
	for (var i = 0; i < array.length; i++) {
		var box=array[i];
		box.random();
	}
},500);
var wechat = require('wechat');
var express = require('express');
var http = require('http');

var app = express();



var http_port = 3000;

app.use('/weixin',wechat('asdiasdl234lj23n23rdi2w3rwrw4r',function(req,res,next){
		var message = req.weixin;
		//console.log(message);
		if(message.Content === '妹子'){
			res.reply('别这样叫我嘛！');
		}
		else{
			res.reply('你无聊不无聊，老骚扰我干啥？');
		}
	}
));


var server = http.createServer(app).listen(http_port,listen_cb);


function listen_cb(req,res){
	console.log("http: listen on the port of " + server.address().port);
}


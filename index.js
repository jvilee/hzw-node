var express = require('express')
var app = express()

var fs = require('fs')

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('./hzw'))
app.get('/', function(req, res) {
    //输出一个字符串数据
    res.send('服务器运行正常,您访问了根目录');
});

app.get('/api/get_list', function(req, res) {
    // 输出一个json数据

    fs.readFile('./data/index.json',function(err,data){
      if(err){
        console.log(err);
        res.json({
            status: "n",
            msg: "获取数据失败",
            data: ""
        });
      }
      else{
        res.json({
            status: "y",
            msg: "获取数据成功",
            data: JSON.parse(data)
        });
      }
    })
});
app.post('/sub',function(req, res) {
    console.log(req.body)
    var arr = []
    var strData = fs.readFileSync('./data/index.json')
    if(strData != ""){
        arr = JSON.parse(strData)
    }
    arr.push(req.body)
    fs.writeFile('./data/index.json',JSON.stringify(arr))
    res.json({staus:"y", msg: "保存数据成功"})
})

app.listen(2000, function () {
    console.log('服务器运行于2000端口');
});
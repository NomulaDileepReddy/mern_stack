const http = require("http")
var users = [
    {
        id:3,
        name:"Dileep",
        age:20
    },
    {
        id:4,
        name:"Dileep",
        age:20
    }
]

// function show(){
//     console.log("I am in show function")
// }

// setTimeout(function(){
//     console.log("I am in setTimeout")
// },1000)

var server = http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    if(req.url==='/'){
        console.log("hello i am in / request")
        res.writeHead(200,{content:"application/text"})
        res.end("hello world")
    }else if(req.url==="/student"){
        res.writeHead(200,{content:"application/json"})
        res.end(JSON.stringify({name:"Dileep",id:227}))
    }else if(req.url==='/users'){
        res.writeHead(200,{content:"application/json"})
        res.end(JSON.stringify(users))
    }
    else{
        res.writeHead(404,{content:"application/json"})
        res.end("404 file not found")
    }
})

server.listen(5000)
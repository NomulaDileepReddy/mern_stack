const express = require("express")
const bodyParser  = require("body-parser")
const  cors = require('cors')
var app = express();

var port = 5000;
app.use(cors())

// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin","http://localhost:3000")
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE")
//     res.header("Access-Control-Allow-Headers","Origin,Content-Range",'X-Cotent-Range,Content-Type,Accept')
//     next()
// })

var users = require("./routes/users")
var jsonParser = bodyParser.json()
app.use(bodyParser.json({type:'application/*+json'}))

app.use("/users",jsonParser,users)


app.listen(5000,function(){
    console.log("Server started at 5000")
})


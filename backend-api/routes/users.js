var express = require("express")
var router = express.Router();

var users = [
    {
        id:1,
        name:"Dileep",
        age:20,
        phone:7093853938
    }
]

router.get("/",function(req,res){
    res.send(users)
})

router.post("/create",function(req,res){
    console.log(req.body)
    const {id,name,age,phone}=req.body;
    users.push({id,name,age,phone});
    res.send("User Created Successfully");
})

router.delete("/:id/delete",function(req,res){
    console.log(req.params.id)
    let filterUsers = users.filter(function(item){
        return Number(item.id)!==Number(req.params.id)
    })

    users = filterUsers
    res.send("Users updated succesfully")
})

router.put("/:id/update",function(req,res){
    for(i=0;i<users.length;i++){
        if(users[i].id===Number(req.params.id)){
            users[i].age = req.body.age;
            users[i].name=req.body.name;
            users[i].phone= req.body.phone;
            users[i].id= req.body.id;
        }
    }
    res.send("User updated successfully")
})

module.exports = router;
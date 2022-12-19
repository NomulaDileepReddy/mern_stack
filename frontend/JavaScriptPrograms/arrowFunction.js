let user = {
    name : "Dileep",
    show:()=>{
        console.log("Using Arrow Function",this.name) // Using arrow this is points to window so output is undefined
    },
    show2:function(){
        console.log("Using Normal Function",this.name) // whereas using normal function this points to user so this.name = Dileep
    }
}

user.show()

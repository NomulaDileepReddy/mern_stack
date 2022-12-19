class Employee{
    employee = [{id:1,name:"Dileep",age:20,salary:1000000}]
    constructor(){
        
    }   

    create(id,name,age,salary){
        this.id=id,
        this.name=name,
        this.age=age,
        this.salary=salary
        this.emp = {id:this.id,name:this.name,age:this.age,salary:this.salary}
        this.employee.push(this.emp)
    }

    update(id,name){
        var i;
        for(i of this.employee){
            if(id==i.id){
                i.name=name;
            }
        }
    }

    delete(id){
        var filteredUsers = this.employee.filter(function(item){
            return item.id!=id;
        })
        this.employee = [...filteredUsers]
    }

    display(){
        console.log(this.employee)
        for(var i of this.employee){
            console.log(i)
        }
    }

}

let e = new Employee()

while(true){
    var choice;
    choice = prompt("\n1.Create 2.Delete 3.Update 4.Display 5.Exit\nEnter your choice")
    if(choice==1){
        var id = parseInt(prompt("Enter id:"));
        var namee =prompt("Enter name:")
        var age =parseInt(prompt("Enter age:"))
        var salary =parseInt(prompt("Enter salary"))
        e.create(id,namee,age,salary)
    }
    if(choice==2){
        var id = parseInt(prompt("Enter id to delete:"))
        e.delete(id)
    }
    if(choice==3){
        var id =parseInt(prompt("Enter the id to update "))
        var newname = prompt("Update name to :")
        e.update(id,newname)
    }

    if(choice==4){
        e.display()
    }

    else if(choice==5){
        exit(0);
    }
}
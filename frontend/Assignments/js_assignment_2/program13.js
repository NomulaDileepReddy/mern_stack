//using call and apply we can call the number of person1 object from person2 object 
// the difference between call and apply is call method takes arguments seperately,
// apply method will take arguments as an array .

let per1 = {
    name:"Deepak",
    age:20,
    address:"Hyd",
    usingcall(marks){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Address:",this.address);
        console.log(marks);
    },
    usingapply(year,marks){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Address:",this.address);
        console.log("year:",year);
        console.log("Marks:",marks);
    },
    usingbind(){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
        console.log("Address:",this.address);
    }
}
let per2 = {
    name: "Akshu",
    age:20,
    address:"Hyd",
}
per1.usingcall([11,22,33,44]);
per1.usingapply("3","9.4");
per1.usingbind();
per1.usingcall.call(per2,[1,2,3,4]);
per1.usingapply.apply(per2,["3rd","9.4"])
let result = per1.usingbind.bind(per2)
result();
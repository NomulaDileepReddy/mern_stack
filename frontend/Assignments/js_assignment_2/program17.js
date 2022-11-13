a = [
    {
        id:6,
        age:40
    },
    {
        id:5,
        age:50
    },
    {
        id:3,
        age:40
    },
    {
        id:4,
        age:20
    }
]


for(i of a){
    if(i['age']==20){
        let x = a.indexOf(i)
        a.splice(x,1);
    }
}
console.log(a)
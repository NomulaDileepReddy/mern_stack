// function getUsers(callback){
//     console.log("Getting the users");
//     setTimeout(()=>{
//         users=([{
//             id:1,
//             name:"Deepak",
//             age:20
//         },{
//             id:2,
//             name:"dileep",
//             age:22
//         }]);
//         console.log("Got the users from db");
//         callback(users);
//     },2000);
// }
// function printUsers(users){
//     console.log("Printing the users")
//     for(i of users){
//         console.log(i);
//     }
// }
// getUsers(printUsers);

                // Using Promises
function getUsers(){
    console.log("Getting the users");
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            users=[
                {
                    id:1,
                    name:"dileep",
                    age:20
                },{
                    id:2,
                    name:"akshu",
                    age:22
                }
            ]
            console.log("Got the users from db");
            resolve(users);
        },5000);
    });
}
function printUsers(users){
    console.log("Printing the users")
    for(i of users){
        console.log(i);
    }
}
getUsers().then(function(result){
    printUsers(result);
}).catch(function(error){
    console.log(error);
    console.log("Some error occured while getting data");
})
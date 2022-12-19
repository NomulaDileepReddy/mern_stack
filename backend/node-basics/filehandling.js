const fs = require("fs")

// fs.readFile("hello.txt","utf-8",function(err,data){  // error-first-callback   is the function which contains 1st parameter as error
//     if(err){
//         console.log(err)
//     }
//     console.log("Data:",data)
//     console.log("Hello after reading file")
// })

// This above program is async ,so it won't wait for another

// let data = fs.readFileSync("hello.txt","utf-8")  // this is synchronous
// console.log("File data ==",data)
// console.log("Hello after reading file")

//  fs.writeFile("hello1.txt","hello good morning friday",function(err,data){
//     if(err)
//         console.log("",err)
//     console.log("file written successfully")
//  })

// fs.writeFileSync("hello1.txt","Hello Happy weekend");
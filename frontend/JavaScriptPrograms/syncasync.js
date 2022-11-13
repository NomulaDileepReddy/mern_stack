
// Synchronous
// console.log("1");
// console.log("2");
// console.log("3");


// Asynchronous

// console.log("1");
// setTimeout(function(){
//     console.log("2")
// })
// console.log("3")


// function printing(){
//     console.log("I am First")
// }

// function calculate(){
//     console.log("I am Second");
// }

// printing();
// setTimeout(calculate,0)
// //calculate();
// console.log("No I am second");


//  callbacks  

// function placeorder(fn){
//     console.log("Order placing");
//     setTimeout(()=> {
//         console.log("Order placed");
//         fn();
//     });
// }

// function orderAgain(){
//     console.log("Please Order again");
// }

// function payment(fn){
//     console.log("Payment done");
// }

// placeorder(payment);
// orderAgain();


// Promises   ---> Inversion of control

function placeOrder(){
    return new Promise(function(resolve,reject){
        console.log("place order");
        setTimeout(function(){
            console.log("Order placed");
        },4)
    })
    
}
function makePayment(){
    console.log("Making placement done");
}

placeOrder().then(function(result){
    console.log(result);
    makePayment();
}).catch(function(err){
    console.log("some error",err)
})

console.log("hello I am independent");
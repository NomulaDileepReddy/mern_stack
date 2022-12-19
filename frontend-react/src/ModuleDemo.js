// Named export
export let user = {
    name : "Dileep",
    age : 20
}

export function calling(){
    console.log("Calling function")
}

// default export  -- unlike named export , default export can be imported by any name 
export default function sayHi(){
    console.log("Saying Hiii")
}
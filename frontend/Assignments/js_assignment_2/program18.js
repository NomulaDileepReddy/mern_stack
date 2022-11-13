let input;
input = prompt("Enter a number:");
inputint = parseInt(input);
let temp = inputint
let ans =0;
while(inputint!=0){
    rem = inputint%10;
    ans = rem + ans*10;
    inputint = Math.floor(inputint/10)
}
if(temp == ans){
    console.log("Palindrome");
}
else{
    console.log("Not a plaindrome")
}
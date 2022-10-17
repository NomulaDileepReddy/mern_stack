function Reversed()
{
// Reverse of a number
var rev=0;
var rem=0;
var num=123;
while(num!=0){
     rem=num%10;
     rev=rem+rev*10;
     num=Math.floor(num/10);
}
document.write(rev);
console.log(rev);
}

function Palindrome()
{
// Palindrome or not

rev=0;
var num=12221;
var temp=num;
while(num!=0){
    rem=num%10;
    rev=rem+rev*10;
    num=Math.floor(num/10);
}
if(rev==temp){
    document.write("Given number is a plaindrome");
    console.log("Given number is a plaindrome");
}
else{
    document.write("Given number is not a plaindrome");
    console.log("Given number is not a plaindrome");
}
}

// Sum of digits in a number
function SumOfDigits()
{
    var num=1234;
    var rem=0;
    var sum=0;
    while(num!=0)
    {
        rem=num%10;
        sum=sum+rem;
        num=Math.floor(num/10);
    }
    console.log(sum);
    document.write(sum);
}

// Loops 

// for , while , do-while , for in

// for Loop

var num=10;
for(i=1;i<=num;i++)
{
    console.log(i);
}

// While loop

 var num=1;
while(num<=10)
{
    console.log(num);
    num++;
}

// do-while

var num=1;
do{
    console.log(num);
    num++;
}while(num<=10)

// for  in

var car ={
    model:"audi",
    price:100000,
    year:2020
}
for(i in car){
    console.log(i,car[i]);
}
arr=[10,20,30,40]
for(i of arr){
    console.log(i);
}

// Sum of 1 to 10 numbers

var sum=0;
for(i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);

// Write a program to check a alphabet is vowel or not 
 
var ch='a';
if(ch=='a' || ch=='e' || ch=='i'|| ch=='o'|| ch=='u')
{
    console.log("Given alphabet is a vowel");
}
else{
    console.log("Given alphabet is not a vowel");
}


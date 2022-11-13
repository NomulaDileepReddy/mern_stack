// How to access element

// 1. getElementById ----- this will return single element by using id name


let div = document.getElementById("box1")
console.log(div)
// div.style.color="red";
// div.textContent="Hello";

// 2. getElementByClassName ---- this will return multiple elements by using className

// let divwithclass = document.getElementsByClassName("box-div")
// console.log(divwithclass)
// console.log("length=",divwithclass.length)
// divwithclass[0].textContent="Hello div by class"
// divwithclass[1].textContent="Hello in 2nd div"
// divwithclass[0].style.color="green"


// 3. getElementByTagsName ---- for multiple elements using tags

let divwithTags = document.getElementsByTagName("div")
console.log("Length+",divwithTags.length)

// 4. querySelector ---- this will return single element like id or class or tag as a query

let parawithQuery = document.querySelector(".p1")
console.log("withQuery",parawithQuery)

// 5.querySelectorAll  ---- this will return mulitple element 

let parawithAllQuery = document.querySelectorAll(".box-div>.box-div>p")
console.log("With Query All",parawithAllQuery)
console.log("particular",parawithAllQuery[0])
// console.log(parawithAllQuery[0],parawithAllQuery[1],parawithAllQuery[2],parawithAllQuery[3])
// console.log(parawithAllQuery[0].nextSibling.firstChild)


// Creating elements without using html

let headers = ['age','name','salary']
let table = document.createElement("table")
let headingRow = document.createElement("tr")
let heading =document.createElement("th")
for(let i=0;i<headers.length;i++)
{
    textContent = document.createTextNode(headers[i])
    heading.appendChild(textContent)
}
headingRow.appendChild(heading)
table.appendChild(headingRow)
document.body.appendChild(table)
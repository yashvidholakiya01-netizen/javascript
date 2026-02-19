// DOM -- Document object model
// all website code --> DOM
// website output --> DOM
// DOM -- html body

// Dom tree structure:
// Node --> Element (ex. h1, p, b, i), text (ex. lorem), comment

//DOM Manipulation - change body
// select element from html
// change text
// change html
// change css
// change attribute
// event listeners

// select element
// getElementById
let a = document.getElementById("abc");
console.log(a);

// getElementByClassName
let b = document.getElementsByClassName("abc");
console.log(b);

// getElementByTagName
let c = document.getElementsByTagName("h1");
console.log(c);

// querySelector --> only select first (tag, class) in html
let d = document.querySelector(".abc");
console.dir(d);

let e = document.querySelectorAll("h1");
console.log(e);

// change text
// innerText
// d.innerHTML = "change text with js";

// outtext -- not use in dom
// d.outertext = "<h1>change text style with js</h1>"

// textContent -- use for change text
// d.textContent = "change text with TextContent";

// outter vs inner
// innerText -- show text between tag -- ingore tag
// outerText -- show text between tag -- remove tag

// innerText -- show text between too tag -- not tag
// outerText -- show text with tag 

// ----------------------------------
// Attribute Manipulation 
// getArribute, setAttribue, removeAttribute
let link = document.querySelector('a')
console.dir(link)
// console.log("get Attribute", link.href) // -- give value of href attribute 

// link.href = "http://www.google.com/"
// element.setAttribute("attribute_name", "change")
// link.setAttribute("href", "www.google.com")
// let info = link.getAttribute("href");
// console.log("get Attribute", info) // --- give value of href attribute

// element.removeAttribute("name")
// link.removeAttribute("href")

// ------------------------------------------
// dynamic Dom manipulation
// createElement, appendChild, removeChild, prepend

// createElement
let box = document.createElement("div")
box.textContent = "this is div tag create using js"
console.log(box)

// append / prepend -- add element into HTML
// append - - add element in to last
// document.body.append(box);
// prepend -- add element into first
// document.body.prepend(box);

// remove
// d.remove();

// appendChild 
let outer_box = document.createElement("div");
outer_box.classList.add("outer");
document.body.append(outer_box);

let inner_box = document.createElement("div");
inner_box.classList.add("inner");
outer_box.appendChild(inner_box);

// append vs appedChild
// remove vs removeChild

// ---------------------------------------------
// style updtes via .style and classList (add, remove, toggle)
console.dir(d);
// d.style.backgroundColor = "green";
// d.style.color  = "white";
// d.style.paddin = "20px";

// ClassList
let card = document.querySelector(".card");
// console.dir(card)
// card.classList.add("card-style")

// remove
// card.classList.remove("card");

// toggle -- class --> available --> remove it
//           class --> not available --> add it

// card.classList.toggle("card")












// Event - page par koi pn action karo tene ek event rise karshe,
// page par click, hover ,typing all are events
// Event listener - event nu reaction --- give reaction when click, dbclick,hover,typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_naame",function(){})

// ?---------------------------
// common Events: click, input, change, submit, mouseover, mouseout, keydown, keyup, load, unload, scroll, resize
let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    document.body.classList.toggle("cs-body");
    // console.log(btn.textContent)
    if(btn.textContent == "Dark Mode"){
        btn.textContent = "Light Mode"
    }else{
        btn.textContent = "Dark Mode"
    }
});
// box
let box = document.querySelector(".box");
let btn1 = document.querySelector(".btn1");
let span = document.querySelector(".span");
btn1.addEventListener("click", function() {
    box.classList.toggle("bg-red");
    if (span.textContent === "Red") {
        span.textContent = "white"
    }else{
        span.textContent = "red"
    }
});

// input how to know which is typed ?
let inp = document.querySelector(".text");
inp.addEventListener("input",(dets)=> {
    inp.style.backgroundColor = "yellow";
    if(dets.data !== null){
        console.log(dets.data);
    }
});

// change -- when you change elements state
let sel = document.querySelector(".sel");
let device = document.querySelector(".device");
sel.addEventListener("change", (dets) => {
    device.textContent = dets.target.value;
})

// change event => change div color and border color
let box1 = document.querySelector(".outer-box");
let inp1 = document.querySelector(".color-inp");
let bor = document.querySelector(".color-border");

inp1.addEventListener("change", (dets)=> {
    box1.style.backgroundColor = dets.target.value;  
})
bor.addEventListener("change", (dets)=> {
    box1.style.borderColor = dets.target.value;
})

// submit
let form = document.querySelector("form");
form.addEventListener("submit",()=>{
    document.body.style.backgroundColor = "red";
})

// mousedown / mouseout
let box2 = document.querySelector(".box2")
box2.addEventListener("mousemove", ()=> {
    box2.style.width = "500px"
})
box2.addEventListener("mouseout", ()=> {
    box2.style.width = "100px"
})

//keyup
let keyup = document.querySelector(".keyup")
keyup.addEventListener("keyup", ()=>{
    document.body.style.backgroundColor = "green"
})

// -----------------------------------------------
// Event Object:
// sel.addEventListener("change", (dets) => {
//   console.log(dets); ==> dets -- that called event object    
// })

// target, type, preventDefault
// target --> that show element
// type --> show Event Type
// PreventDefault --> use for html- form --> prevent from to refresh and clean details

let outer = document.querySelector(".outer")
let inner = document.querySelector(".inner")
let most_inner = document.querySelector(".most_inner")






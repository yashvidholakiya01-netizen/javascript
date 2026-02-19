// SetTimeout, clearTimeout

// setTimerout --> run only one time
// timeout -- in ms
// setTimeout(()=>{
//     console.log("hello")
// },2000)

// setInterval, clearInterval
// setInterval --> run into llop(infinte times)

// let Timer = setInterval(() => {
//     console.log("hi, set Interval");
// },2000)
 
// clear Interval 
// clearInterval(Timer);

// let count = 0;
// let counter  = setInterval(()=> {
// count++;
// if(count <= 10){
//     console.log(count)
// }else{
//     console.log("stop")
//     setInterval(counter)
// }
// },1000)

// popup window
// let button = document.querySelector("button")
// let card = document.querySelector(".card")

//  setTimeout(()=>{
//     card.style.display="block"
// },5000)

// button.addEventListener("click", ()=>{
//     card.style.display="none"
// })

// Real use: delaying UI actions, auto-refresh

// Downloading card
let dCount = 0;
let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let h2 = document.querySelector("h2");

let download = setInterval(()=>{
    if(dCount <= 99){
        console.log(dCount)
        percent.textContent = dCount+ "%";
        dCount++;
        bar.style.width = `${dCount}%` 
        percent.textContent = dCount+ "%";
    } else{
        h2.textContent = "Download"
        clearInterval(download)
    }
} ,100)
// setTimerout vs setInterval



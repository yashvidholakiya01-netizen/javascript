let d = 20;
function abc() {
  console.log(d);
}

function def() {
  let d = 25;
  abc();
}
def();
// console.log(20): ans:

function parent() {
  let a = 12;
  return function () {
    console.log(a);
  };
}
let fnc1 = parent();
fnc1();
// console.log --> 12

// counter
function counter() {
  let a = 0;
  return function () {
    a++;
    console.log(a);
  };
}
let fnc = counter();
fnc(); //1
fnc(); //2
fnc(); //3
fnc(); //4
fnc(); //5

let fnc2 = counter();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();

// create toaster
function createToaster(configs) {
  let toast = document.querySelector(".toast");

  return function (data) {
    let toaster = document.createElement("div");
    toaster.className = `${configs.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-red-950 border-2 border-red-950"} 
    px-6 m-3 py-3 inline-block top-4 right-4 rounded-md pointer-event-none shadow-lg`;

    toaster.textContent = data;
    if (configs.positionY !== "top" || configs.positionX !== "left") {
      toast.className += `${configs.positionX === "left" ? "left-10" : "right-10"} ${configs.positionY == "top" ? "top-10" : "bottom-10"}`;
    }
    toast.appendChild(toaster);

    setTimeout(() => {
      toast.removeChild(toaster);
    }, configs.duration * 1000);
  };
}
let toast = createToaster({
  positionY: "right",
  positionX: "bottom",
  theme: "light",
  duration: 5, // 3 sec
});
toast("welcome Admin");
setTimeout(() => {
  toast("you have 2 new notification");
}, 2000);
setTimeout(() => {
  toast("message login successfully");
}, 4000);
setTimeout(() => {
  toast("new leave application raised by developer");
}, 6000);

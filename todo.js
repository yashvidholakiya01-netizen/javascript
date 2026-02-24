// select
let inp = document.querySelector("input");
let addBtn = document.querySelector("#add_btn");
let ul = document.querySelector(".task_list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks)); // save data into array
}

function showTask() {
  ul.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type='checkBox'${task.done ? "checked" : ""}>${task.text}<button class="Dbtn">Delete</button>`;
    ul.appendChild(li);
  });
}
showTask();
addBtn.addEventListener("click", () => {
  let value = inp.value;
  console.log(value);
  tasks.push({ text: value, done: false });
  saveLocalStorage(tasks);
  showTask();
  
  inp.value = "";
});

ul.addEventListener("click", (e) => {
  console.log(e.target.closest("li"));
  let li = e.target.closest("li");
  console.log([...ul.children].indexOf(li));
  let index = [...ul.children].indexOf(li);
  
  // checkbox
  if (e.target.type === "checkbox") {
    tasks[index].done = e.target.checked;
  }

  //delete btn
  if(e.target.classList.contains("Dbtn")){
    tasks.splice(index,1);
  }
   
  saveLocalStorage();
  showTask();
});
showTask();

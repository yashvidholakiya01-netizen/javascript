// 1. select first
// 2. show form and close form
// 3. from - validation, submit,reset
// 4. store into localStorage
// 5. createElement and show data
// 6. show all data into HTML
// 7. Create UP and Drown Btn

let add = document.querySelector("#add-note");
let container = document.querySelector(".form-container");
let closeBtn = document.querySelector(".closeForm");
let form = document.querySelector("form");

let img = document.querySelector(
  "input[placeholder = 'https://example.com/photo.jpg']",
);
let uname = document.querySelector("input[placeholder = 'Enter full name']");
let home = document.querySelector("input[placeholder = 'Enter home town']");
let purpose = document.querySelector(
  'input[placeholder="e.g., Quick appointment note"]',
);
let category = document.querySelectorAll("input[name='category']");

add.addEventListener("click", () => {
  container.style.display = "block";
});
// close from
closeBtn.addEventListener("click", () => {
  container.style.display = "none";
});

// save to localstorage
function SaveToStorage(obj) {
  // save new data
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));
}

// 3. from - validation, submit,reset
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let imgUrl = img.value.trim();
  let fullname = uname.value.trim();
  let town = home.value.trim();
  let task = purpose.value.trim();
  let selected = false;

  category.forEach((cat) => {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (imgUrl === "") {
    alert("Please Enter Image URL");
    return;
  }

  if (fullname === "") {
    alert("Please Enter full name");
    return;
  }
  if (town === "") {
    alert("Please Enter home town");
    return;
  }
  if (task === "") {
    alert("Please Enter purpose");
    return;
  }
  if (!selected) {
    alert("Please Enter Category");
    return;
  }

  SaveToStorage({ imgUrl, fullname, town, task, selected });
  container.style.display = "none";
  form.reset();
  ShowCards();
});

let stack = document.querySelector(".stack");

function ShowCards(){
  stack.innerHTML = "";
  let alldata = JSON.parse(localStorage.getItem("data"));
  alldata.forEach((data) =>{
      console.log(alldata)
       //card container
  let card = document.createElement("div");
  card.classList.add("card");

  //image
  let img = document.createElement("img")
  img.classList.add("avatar");
  img.setAttribute("src",data.imgUrl);

  //name
  let h2 = document.createElement("h2");
  h2.textContent = data.fullname;

  // home town
  let homeInfo = document.createElement("div");
  homeInfo.textContent = ("info")

   let home = document.createElement("span");
  home.textContent = "Home Town";
  let town = document.createElement("span");
  town.textContent = data.town;


  // purpose
  let purpose = document.createElement("div");
  purpose.classList.add("info");

  //span tags - purpose
    let head_note = document.createElement("span");
     head_note.textContent = "purpose"
    let note = document.createElement("span");
     note.textContent = data.task

    //button div
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("buttons");

 //buttons - button div
    let call = document.createElement("button");
    call.classList.add("call");
    call.innerHTML = `<i class="ri-phone-line"></li> Call`;
    let msg = document.createElement("button");
    msg.classList.add("msg");
    msg.textContent = `Message`;

  // add to html
  stack.appendChild(card);
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(homeInfo);
  homeInfo.appendChild(home);
  homeInfo.appendChild(town);
  card.appendChild(purpose);
  purpose.appendChild(head_note);
  purpose.appendChild(note);
  card.appendChild(btnDiv);
  btnDiv.appendChild(call);
  btnDiv.appendChild(msg);

 console.log(stack)
  })
 
}
ShowCards();

// // Animation
// function update(){
//   let card = document.querySelectorAll(".card");
//   for(let i = 0;i <3; i++){
//     const cards = card[i];
//     cards.style.zIndex = 3 - i;
//     cards.style.transform = `translateY(${i*10}px) scale(${1 - i*0.05})`;
//     cards.style.opacity = `${1 - i * 0.05}`;
//   }
// }

//UP btn and down btn
let upBtn = document.querySelector("#upBtn")
let downBtn = document.querySelector("#downBtn")

upBtn.addEventListener("click", () =>{
   console.log(stack.lastChild);
   lastChild = stack.lastElementChild;

   if(lastChild){
    stack.insertBefore(lastChild, stack.firstElementChild);
    // insertBefore(element)
   }
    // update();
})
downBtn.addEventListener("click", () =>{
   console.log(stack.firstElementChild);
   firstChild = stack.firstElementChild;

   if(firstChild){
    stack.append(firstChild, stack.lastElementChild);
    // insertBefore(element)
   }
  //  update();
})

// // Animation
// function update(){
//   let card = document.querySelector("card");
//   for(let i = 0;i <3; i++){
//     const cards = card[i];
//     cards.style.zIndex = 3 - i;
//     cards.style.transform = `translateY(${i*10}px) scale(${1 - i*0.05})`;
//     cards.style.opacity = `${1 - i * 0.05}`;
//   }
// }









// object oriented javascript
// oops
// dar vakhte blueprint banavo k object keva dekhase ane shu propertics ane methods hase, ane pacchi tena nava nava object banavni sakiye chhiye tene j kevay se object orieted programing

// bkueprint (object kevo dekhashe, object ma su method) --> based on blueprint create objects

// blueprint -- contructor
// function based contructor -->Contructor function --> Name always start with Capital letter

// function CrectePencil(name, price, color) {
//   // blue print
//   this.name = name;
//   this.price = price;
//   this.color = color;

//   this.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = color;
//     document.body.appendChild(h1);
//     return;
//   };
//   this.earse = function () {
//     document.querySelectorAll("h1").forEach((text) => {
//       if (text.style.color === this.color) {
//         text.remove();
//       }
//     });
//   };
//   console.log(this);
// }
// let p1 = new CrectePencil("pencil1", 5, "black");
// let p2 = new CrectePencil("pencil2", 5, "green");
// let p3 = new CrectePencil("pencil3", 5, "blue");
// let p4 = new CrectePencil("pencil4", 5, "pink");
// let p5 = new CrectePencil("pencil5", 5, "yellow");

// jo construction function koi filed tena prototype ma add attech kari de to te filed badha object ma available thase

// CrectePencil.prototype.shape = "rounded";

// what is prototype: prototype is a property of function which is used to add new filed to all the object created by that function

// class in javascript
// class is a syntical sugar over construction function, class ma apde constructor function no upyog kariye chhiye

// why use class: class is more readable and easier to understand than contruction function

// class CreatePen {
//   constructor(name, price, color, company) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//     // what is contructor: constructor is a special method which is called when an object is created, it is used initialize the object
//     // why use constructor: constructor is used to intialize the object, it is called automatically when an object is created, it is used to set initial values of the object
//     this.write = function (text) {
//       let h1 = document.createElement("h1");
//       h1.textContent = text;
//       h1.style.color = color;
//       document.body.appendChild(h1);
//       return;
//     };
//     this.earse = function () {
//       document.querySelectorAll("h1").forEach((text) => {
//         if (text.style.color === this.color) {
//           text.remove();
//         }
//       });
//     };
//     console.log(this);
//   }
// }
// let pen1 = new CreatePen("pen1", 10, "yellow", "company1");
// let pen2 = new CreatePen("pen2", 20, "red", "company2");
// let pen3 = new CreatePen("pen3", 30, "green", "company3");

// extends
// create a new class that hold old class vaue and also have some new values
// copy old class and add new value

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.role = "user";

    //read profile
    this.profile = function () {
      console.log(this);
      // console.log({"name": this.name, email: this.email, age: this.age, role: this.role});
      return "user profile fecthed";
    };
    // create a post
    this.post = function (title, link) {
      let caption = document.createElement("p");
      caption.textContent = title;
      caption.className = "text-2xl text-teal-950";
      let img = document.createElement("img");
      img.setAttribute("src", link);
      img.classList = "w-[200px] h-auto rounded shadow-lg";

      document.body.appendChild(caption);
      document.body.appendChild(img);
    };
    // this,post = function(){
    // console.log(this)
    // let h
    // }
    // write
    console.log(this);
  }
}
let u1 = new User("test", "rest@gmail.com", 25);
let u2 = new User("demo", "demo@gmail.com", 20);

class Admin extends User {
  constructor(name, email, age) {
    super(name, email, age); // je class extends kariye tenu constructoraetle super -- use nu constructor --> super
    this.role = "admin";
    console.log(this);

    //show all user's name
    this.showUsers = function (users) {
      return users;
    };
    // remove user's data*
  }
}
let admin = new Admin("admin", "admin@gmail.com", 25);
console.log("admin can see all data");
admin.showUsers({ user1: u1.profile(), user2: u2.profile() });

// prototype inheritance vs classical inheritance
//classical inheritance -- create a classes and extands thier classes

// inheritance maning --> class to class inheritance (copy one class into another class)

//prototype inheritance --> object to object
// ek object se tene all props/method ne inherit kari se k nava object ma inherit kari chho k nava object ma

let SoftDrink ={
   color: "blue",
   price: 50,
   buy: function(company){
    console.log(
      " == This your bill == :\n",
      "color:" + this.color,
      "\n price :" + this.price,
      "\n company name:" + company,
    );
   },
};
 let BlueBerry = Object.create(SoftDrink);
 console.log(BlueBerry);

 // create form that can save data into local storage 
// this keyword
// this keyword special keyword in javascrit
// becuse of this keyword we can access the properites and methods of an object
// this keyword is used to reer to the current object
// this keyword is useful when we have to access the properties and methods of an object inside a method of object

// this keyword context is determined by how a function is called (that is the reson why this keyword is called dynamicscope)(this ni value this nu use kaya context ma se te par depend kare se)

// global context
console.log(this);

// function context
function abc(){
    console.log(this);
}
abc();

// method context
let obj ={
    name:"test",
    sayName:function(){
        console.log("this",this)
        console.log(this.name);
    } // method --> ek function je koi object ni under hoy tene method kevaay. // this --> give objects

    // if you use arrow function then this key give you windows object becuse arrow function does not have its own this keyword it takes this value from its parent scope

    // if you create one more function inside method then this loose their value --> you have to create a arrow function 
    
};
obj.sayName();

//method -- arrow function
let obj1 = {
    name:"test1",
    sayName:()=>{
        console.log("this arrow fnc", this)
    }
};
obj1.sayName();

// method -- fnc into fnc
let obj2 = {
    name: "test 2",
    sayName:function(){
        function abc1(){
            console.log("this fnc into fnc", this);
        }
        abc1();
    },
};
obj2.sayName();

// arrow function and laxical this
// arrow function does not have its own this keyword it takes this value from its its parent scope

let obj4 ={
    name: "johan",
    sayName:function(){
        console.log(this);  // method --> ek function je koi object ni under hoy tene method kevaay. // this --> give objects
          let abc = () => {
            console.log(this);// arrow function does not have its own this keyword it takes this value from its parent scope
        }
        abc(); 
    }
}
obj4.sayName();

// Manual Binding
// call, apply, blind
// function ne call karti vakhte this keyword ni value set karva mate call, apply, blind method no upyog kariye chhiye

let obj5 = {
    name: "test10",
    email:"a@a.com",
}; // save this obj. into keyword

function temp_a(){
    console.log(this);
}

// function.call(object_name) --> this keyword ni value set karva mate call method no upyog kariye chhiye
temp_a.call(obj5);

// function.apply(object_name) --> this keyword ni value set karva mate apply method no upyog kariye chhiye
temp_a.apply(obj5)

// function.bind(object_name) --> this keyword ni value set karva mate bind method no upyog kariye chhiye
let fnc = temp_a.bind(obj5); // blank object craete
fnc();
// console.log(fnc);

// event context 
let h1 = document.querySelector("h1")
h1.addEventListener("click", () => {
    console.log(this);
});
// fnc --> h1 tag(html elements)
// arrow fnc --> window

// class context
class Person{
    constructor(){
        console.log(this)
        let user = "test";
    }
}

let p1 = new Person(); // this value --> blank obj.

// context --> this value
// globle --> window
// fnc --> window
// method contect fnc es5 --> object
// method context arrow fnc es6 --> window 
// method context fnc es6 into fnc es5 --> window
// method arrow fnc es6 into fnc es6 --> window 
// method arrow fnc es6 into arrow fnc es6 --> window
// event context --> html element
// class context --> blnk object

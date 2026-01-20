// data type:
// Two Type of Data Types:
// 1. Primitive Data Types
// copy --> real value 
let a = 26;
let b = a;
// types: string,number, boolen, null, undefined, symbol,bigint


// 2. Non- Primitive Data Types (Reference Data Types) [],(),{}
// copy --> give refence of parent
let dr = [1,2,3];
let ee = dr;
// types: arrays [], objects {}, functions ()

// <------ primitive Data Types ------>
// types: string,number, boolen, null, undefined, symbol,bigint
// string :
// ' ' - single quotes
// " " - dobule quoutes
// `` - backticks
let d = "name";
d= "username";
d = `firstname`;

// number:
let e = 12;
e = 12.25;
e = -24;

// boolean:
let f = true;
f = false;

//null:
//you give a value
let g = null;

// undefined:
// you don't give a value, by defualt value
let h;

//Symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1 == u2
let obj = { ud:1,name:"test",email:"test@test.com"};
let u3 = "uid";
let u4 = Symbol("uid");
// obj[u3] = "001";

// bigint:
// cheak range of number , Number.Max_SAFE_INTEGER
let number = 59652557465695635;
number = number +6;
let num2 = 4558476569856n;
num2 +3n;


// <---- Non-Primitive Data Type ---->
//types: arrays[], objects {}, function ()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = {name: "test", age: 9, phone_number:41584659596855};
let profiles =[{
    name: "test1", age : 41,phone_number:1458745874},
   { name: "test1", age : 41,phone_number:1458745874},
 {name: "test1", age : 41,phone_number:1458745874},
];







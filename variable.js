var a = "temp";
var _123 = "yashvi";
var $123 = "hello";
d = 12;
let temp1 = "abc";

const temp_const = "hello yashvi";

//declaration and initialization
var d; //declare

var d= 12;
// var add value into window
// var is function scoped
// var can be redeclared and ressigned
var name  = "user name";
let name1 = "user name";

//ressignment, redeclaretion
var temp = 12;
temp = "number";//ressignment
var tremp = "24";//redeclaretion

//scope(global,block,function)
var e = 23; //global scope
console.log("global " + e );
{
    var e = 25; //block scope
    console.log("block" + e );
}
function abc(){
    var e = 30;
    console.log("function" + e );
}
abc()
console.log(e)

let f = 23;
console.log("global let " + f );
{
    let f = 25;
    console.log("block let " + f );
}

function abcd(){
    let f = 30;
    console.log("function let " + f );
}
abcd()
console.log(f);

//Temporal Dead Zone(TDZ)
//TDZ not working on var
console.log(temp_b);
var temp_b = 24; // on  var there is no TDZ

// console.log(j);
let j = 12;

//hoistng Imapact
//  hosting --> when your create a variable into js that
//  braek into two part first is declare part that go to up and
//  there initiazation part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
//temp_d = 12; --> that go to down(means stuck into line 64)
//if you use clg before initialization that give you error;
let temp_d_let = 24;
//if you use console.log before initialization
//if you use console.log before initialization that give you error;
//hosting impacton var , let,const

// var --> hoist --> undefined
// let --> hoist --> console.error;
// const --> hoist --> error

console.log(nm);
var nm="ame";

var xy= 1;
{
    var xy=2;
}

let ab= 10; 
{
    let ab= 20;
    console.log("Inside:", ab);
}
console.log("Outside:", ab);


const person = {name: "demo"}; 
person.name;
// person = {} ;
 console.log(person);







































// Array -- Hold multiple values at same time
// ["product_name", 50000, "20%"]
// ["a", "b", "hello"]
// [2,4,6,8]

// craete
// define a variable = [multiple values]
let arr = [1,2,3,4]
// let product_data = ["S25 ultra",15000, "20%","moblie"]

// access
// position = [0 1 2 3] --> index
// access
// array_name[position(index)]
arr[0];

//modify
//array name[position] = new value
arr[0] = 10;

//array methods: (variable_name.method_name())
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
arr.push(5);
// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevi
// use case -- enter new products into existing products list

// pop --> remove last value into array
// arr.pop()
// use case -- remove last product you add into your list

//shift -- remove first value into array
// arr.shift()
// use case -- remove old products 

// unshift -- add value into array -- first
// arr.unshift(10)

// splice - remove value into array -- specific position and specific number of values
// into () - first index(position), how many value you want to remove
// let e = [50, 60, 30, 40, 10];
// e.splice(3, 2);
// e.splice(3, 0, 50, 100)
// use case -- select msg and remove multiple msg at on click

// slice - copy values from array -- specific position and secific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not inclue into copy
// let f = [100,50,23,0];
// let new_f = f.slice(1,3);
// use case -- copy specific data and save it into new vartable
// generate a report based on date and generate a file or save the file or save the file into your local machine

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the you can into

//reverse -- reverse value of array
// let g = [23,40,49,49];/
// g.reverse();
// use case -- show latest update first into your fronted

// sort -- set into ascending order
// let h = [10,20,30,40,50];
// h.sort();
// let h = h.sort(function(a,b){
//   return a - b;
// })

// let arr1 = [10,2,5,20,30];
// let temp_arr1 = temp_arr1.sort((a,b) => a -b);
// use when array hold numeric values

// let arr2 = ["b","f","z","q","m","k"];

// let arr3 = [Hello, Aero , Right , Array, Objects , Variable];
// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];


// for Each loop
// for Each -- array direct value mate loop chlahe
// let i = [10,35,40,68];

// i.forEach((val)=> {
//     let new_val = val + 10;
//     console.log(new_val)
// })

// important into array
// now all method are used in real world projects
// all mothed are working with function
// manipulate data using array methods and function

// .map() method:
// map type j use karvu ke jyare ek new array create karvo se
// first map create a black array -- only for understanding
// let data = [10, 20, 30, 40];
// // same like a for each loop but map return a new array
// let temp_data = data.map((val) => {
//     if(val > 15){
//         return val;
//     }
// })

// // use case -- data ma thi specific data new array ma store karvo hoy
// // ex. product ma thi specific category na product new arry ma store karva hoy
// // if you want to show only electronics product on your homepage

// let marks = [10, 5,20,25,15]
// let final_marks = marks.map((val)=> 
// {
//      if(val == 5){
//         return val +4;
//      }
//      return;
// })

// filter
// filter tyare use karvu ke jyare ek new array create karvo se with condtion
// in return terue/false
// if true --> add into new array
// if else(false) -->not add into new array
// let laptop_price = [15000, 2000, 3000, 34, 457, 8000];

// let expensive_laptops=  laptop_price.filter((price)=> {
//     if (price > 3000) return true;
// })

// je value 3000 thi vadhare se te new array ma add thashe and biji value ne array ma add nathi kare

// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. product ma thi specific price na product new array ma store karva hoy
// if you want to show only expensive product on your homepage
// if you want to filter product based on price

// let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyboard"];

// let filter_product_type = product_type.filter((type) => {
//     if(type === "Tablet" || type === "Mobile") return true;
// });

// // reduce
// // reduce tyare j use karva ke jare ek single value calculate karvi hoy from array
// let total_price =[10,68,45,58,52,48];

// let final_price = total_price.reduce((accumulator, val) => {
//     return accumulator + val;
// },0); // intial value of accumlator
// // 0+10 => 10
// // 10 +68 => 78
// // 78 +45=> 123
// console.log("final price" , final_price)
// accumulator --> je  value function ma return thashe te accumlator
//  ma store thashe -->  accumlator name change kari sako so
// val --> array ni dark value

// use case -- data ma thi ek sigle value calulate karvi hoy
// ex. product ma thi total price calculator karvi hoy

// find
// find tyare j use karvu ke jare array mathi ek value fine karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nathi
// never returns what you retun inside it
// returns the array element itself -- no return arry
// .find() stops at the first match
// it dose not contine looping

// let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart", "Watch"];

// let find_product = product.find((item) => {
//     if(item === "Desktop"){
//         return true;
//     }else if(item === "Tablet"){
//         return true;
//     }else {
//         return false;
//     }
// });

// use case -- data ma thi ek value find karvi hoy based on condition
// ex. product ma thi specifice product find karvo hoy based on name

// find vs filter
// Real-life scenario: shopping mall security
// your are a security guard at a shopping mall
// check the list of visitors

// let people = ["johan", "sara", "mike", "anna", "david" ,"sara"];
// // find --> your are looking for the first person named "sara" in the list and stop searching 
// // (pelhi var j male, bas e j and anagal check j na kare)

// let person = people.find((name) => name === "sara"); 
// console.log("find" , person);

// // filter --> you want to find all visitors named "sara" in the list (all data check 
// // kare and list na end sudhi check kare) 
// let AllSara = people.filter((name) => name === "sara");
// console.log("filter", AllSara);

// example 2: Book Bus for travel

//some
// check kare se k array ma koi pn item codition satisfy kare se k nay
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value its return 
// true or false, find() return value of arry
// give ans in true and false 

// let marks1 = [10, 20, 30, 90];
// let any = marks1.some((val) =>{
//     if(val > 85) return 12;
//     // if (val < 85) return "need improvement"
// }
// )
// console.log(any)
// use case -- check if some product are out of staock in your cart

// every
// check kare se k array ma badha j items condition satisfy kare se k nay
// true -- baha items condition match kare
// false -- ek pn fail thay to

// let def =[20,30,5,35];
// let num = def.every(function(val){
//     return val < 40;
// })
// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let product = ["tablet", "mobile", "laptop", "mobile"]
// method --> condition --> output
// .some() --> item === "mobile" --> true
// .find() --> item === "mobile" --> "mobile"
// .filter() --> item === "mobile" --> ["mobile", "mobile"]
// .every() --> item === "mobile" --> false

// Destructing oprator oprator -- give value to variavble 
// (ex. we don't use every time arr1[1], just save it into variable let [ , k]= arr1)
// let arr4 = [ 1,2,3,4,5]
// let j = arr4[0] --> 1
// let k = arr4[2] --> 3

// let [j, ,k] = arr4; /// --> destructuring
// let [, , n] = arr;
// console.log(k);
// let user_data = [ "test", "test@gmail.com", "male", "surat"]
// name, email, gender, city
// console.log("name", name)


// spread oprator -- copy value from main arry
// let arr8 = [1,2,3,4,5,6,7];
// let arr4 = arr3; // - ust give refernce not copy value (when
//  you change into arr4 that will be change arr3 too)
// let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spred --> into array and object -- copy
// let temp_arr = [1,2,3];
// let temp_arr2 = [4,5,6];
// let mix_arr = [...temp_arr, ...temp_arr2];

const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
console.log(result)







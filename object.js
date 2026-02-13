// objects vs Array
// Object --- when you want to show all data based on one entity(ek j entity all data jota hoy)
// ex. one user data

// Array -- when you want to show entity
// ex. all users

// let user_data = [{name: "abc", email:"test@gmail.com"}, {name: "abd"}, {name:"dejujfi"}]

// create
// variable ={}
// key: value --> key  value structure
let user = {
  name: "yashvi",
  email: "yashvi12@gmail.com",
  roll_no: 30,
};

// access (dot vs square notation)
// variable_name.key_name;
user.name;
user.email;
// user.first_name;
// variable_name['key'];
// user['name']
// user[name]
// let demo1 = "name";
// user[demo]; // --> convert into name (demo = "name")
// --> ouput: Test;

// Nesting and Deep Access
const user1 = {
  name: "test",
  address: {
    city: "surat",
    pin: 2399084,
    locations: {
      lat: 77.9,
      lng: 56.0,
    },
  },
  email: "test@gmail.com",
}; // -- nested Object
user1.address.locations.lat; // --> Deep Access
// user1.address.locations.lng;

// Object Destruturing;
let { lat, lng } = user1.address.locations;
let { name, email, address } = user1;
let { city } = user1.address;
let { lat: abc_lat } = user1.address.locations;
//destrure and rename variable name

let demo = {
  first_name: "demo9",
  last_name: "user",
  age: 28,
  email: "demo@gmail.com",
};

// Looping (for-in loop)
// for (variable name in object_name){}
// for(const key in demo){
// console.log(key);
// obj.key --> not working
// console.log(demo[key]);
// console.log(key, ":", demo[key]); // -- log whole object
// }

// copying Objects: Spred, Object.assign, deep-clone
// Spred
// let user_data ={...demo};
// let user_data = { gender: "male", role: "user",...demo} // add key-value and copy object
// use case : State update

// const user = {
//     name: "amit",
//     age:30
// };

// const updateUser = {
//     ...user,
//     age: 31
// };

// Object.assign -- copy and keys-value
let user_data_assign = Object.assign({}, demo); // -- nothing will be add just copy
let user_data_assign1 = Object.assign({ phone_number: 67890765 }, demo); // -- add and copy

// use case : Default settings + user settings merge
// const defaultSetting = {
// theme: "light",
// language: "en",
// };

// const userSetting = {
// theme: "dark"
// };

// const finalSetting = Object.assign({}, defaultSettings, userSettings);

//console.log(finalSettings);

// Object.assign vs spred
//Object assing() -- method -- ES5 Old version, less used
// Spred -- Oprator -- state updated, most used in react application, clean code

// deep clone
let temp_user1_clone = {...user1}
// user1_clone.address.city = "valsad" --> that will change value of user1 too
// issue: when you clone & copy nested object using spred or object.assign into new variable that copy all value 
// but nested object pass only refrence not copy
// (jyare tame nested object(parent obj.) spred na upyog thi copy karo tyare nested obj.(child obj.)
//  Reference pass karsho -- value copy thase nahi)
// how to clone that -- use deep clone
// first convert your object to string
// JSON - javascript object notation
// JSON.Stringify(obj._name) -- convet string to object

let clone_user1 = JSON.parse(JSON.stringify(user1))
// Deep clone = completely new memory
// use case:
// Real time use:
// API Response handling
// Avoid data mutation bugs

// object.key -- add all keys into array formate
let key_arr = Object.keys(demo);
// use case: user profile from validation
// ex. website par thi user form ma data add kare se and te data backend object formate ma aave se

// const userProfile = {
    // name: "yashvi",
    // email: "yashvi@gmail.com",
    // age: 26
// };
//now check how many field user fill up
// const keys = Object.key(userProfile);
// console.log(keys);
// console.log(keys.length);

//Object.entries -- add key and value into array formate
// give array of arrays
let key_value_arr = Object.entries(demo);
// use case: Display user details dynamically (UI)
// ex. backend give you data into Object formate

const user3 ={
    name: "priya",
    city: "surat",
    role: "Admin"
};
// print key and value both in profile page
Object.entries(user3).forEach(([key_arr, value]) => {
    console.log(`${key} : ${value}`);
});

// object.entries(user) ==> convert into arrays
// forEach ==> array loop

// Optinal chaining, computed properties
// user1.address.location.lng;
user1?.address?.location?.lng; // -- ? Optinal chainig

// use case:
// without optional chaining chaining -> app crash
// backend data incomplate
// API  response safety
// const apiResponse = {
 // user: {
    //  profile: {
        //  name: "neha"
    //  }  
//   }
// };
// console.log(apiRespone.user?.profile?.name);
// console.log(apiRespone.user?.address?.city);

// computed Properties
let role = "admin";
let user2 = {
    name : "test",
    age:26,
    email: "test@gmail.com",
    address:{
        city:"surat"
    },
    [role]: "test"
}

// use case: dynamic object keys
// const fieldName = "email";
// const user = {
// name: "ravi",
//   [fieldName]: "ravi@gmail.com"
// };
// console.log(user);



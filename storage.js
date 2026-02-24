// localStorage API: setItem, getItem, removeItem, clear
// localStroge --> save that data into browe's stroge, after close brower data wasn't daleted
// (brower nu aevu storege ke jema data store thai se and brower band thai jay to pn delete thato nathi)
// ~ 5 MB storege

// setItem
// localStorage.setItem("key", "value")
 localStorage.setItem("name", "test_user")

 // getItem
// localStorage.getItem("key_name")
let user =  localStorage.getItem("name")

 // removeItem
// localStorage.removeItem("name")

// sessionStorage API
// session Storage --> save that temporarily time when you close tab delete was deleted
// (aa storage data ne temporarily time mate save kari ne rakhe se, jyare pn tab close tab
// close karsho tyare teni sathe data pn delete thai jai se)
// ~ 5 mb storage

// setItem
 sessionStorage.setItem("email", "test@user.com")

 // getItem
let email =  sessionStorage.getItem("email")

 // removeItem
// sessionStorage.removeItem("email")

// update
 sessionStorage.setItem("email", "yashvi@user.com")
 sessionStorage.setItem("name", "yashvi@user")
 sessionStorage.setItem("age", "34")
 sessionStorage.setItem("con", "456778889")

//  clear
sessionStorage.clear()

//Basic cookie structure (manual key = value)
// cookie --> store data into brower cookie
// (Cookie data ne brower na cookies name ni property ma save kare se, cookie no use light data 
// save karva mate thai se)
// when you reload web page data will be automatically send to server
// ~4 KB storage

document.cookie = "email = demo@gmail.com"

//max age
document.cookie = "user= demo; max-age= 10" // 10 sec

// date and time
document.cookie = "age = 10; expirse=web, 20 Feb 2026 12:00:00 GMT"; 

// String/ retrieving string vs Json
// save as string into localStoarage and sessionStorage -- try to save array and string
localStorage.setItem











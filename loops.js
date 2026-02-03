// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop 
// why use for-loop? when you know how many times you want to repeaat a block of code.
// print 1 to 10 --> console.log(1); console.log(2); ...  console.log(10);
// kya thi javanu se --> kya sudhi javanu se --> kevi rite javana se
// for (ex. 1 -> 50 -> increment by 1)
// (start; end; change)

// for(let i = 1; i <=10; i++){
//     console.log(i);
// }

// for (let j = 10; j >= 1; j--){
//     console.log(j)
// }

// for(let i = 1; i <= 5; i++){
//     console.log("hello");
// }

// while loop -- do while loop
// kya thi javanu se --> kya rokavanu se --> kevi rite javanu se
// while (ex. 1 -> hello world -> stop when condition false)
// start
// while (end){
// code
// chnage
// }

// let k = 5;
// while (k <= 10){
//     console.log("while loop" +k);
//     k++;
// }

// let k = 20;
// while (k >=10){
//     console.log(k);
//     k--
// }

// let a = 60;
// while (a >= 20){
//     console.log(a);
//     a--
// }

// let a = 30;
// while (a >= 20){
//     console.log(a);
//     a--
// }

// let c =1;
// while (c <= 10){
//     console.log("yashvi");
//     c++
// }

// let c =20;
// while (c <= 30){
//     console.log(c);
//     c++
// }

// do while loop
// do {} while (end);
// let j = 12; // start
// do {
//     console.log("do while loop", j); // code
//     j++; // change (condition)
// }while (j <=20); // while check afer executinf code block (end)


// let z = 15; // start
// do {
//     console.log("do while loop error", z);
//     z++; // change (condition)
// }while (z <17);
// why:

// // break
// for (let k = 1; k <= 201; k++){
//     console.log("loop with break", k);
//     if (k === 32){
//         break;
//     }
// }

// for (let k =10; k <= 200; k++){
//     console.log("k < 24 ", k);
//     if (k > 24){
//         break;
//     }
// }


//continue
// for (let a = 10; a <=20; a++){
//     if(a === 12 || a === 14){
//         continue;
//     }
//     console.log("continue", a);
// }

// for(let a = 1; a <= 10; a++){
//     if(a <=5){
//         continue;
//     }
//     console.log("contiue skip", a)
// }

// for (i = 1; 1<=10; i++){
//     console.log(i)
// }

// while (a >= 1){   
//     console.log(a);
//     a--;
// }


// for(let i=1; i<=100; i++){
//     if(i%7 ===0 ){
//         console.log(i);
//     }
// }

// for(let i=1; i<=70; i++){
//     if(i%7 ===0){
//         console.log(i);
//         // break;
//     }
// }

// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);
 
// }

count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log("10 count",i);
    if(count ===10){
        break;
    }
}
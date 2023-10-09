//  let mahfuz=7;
//  let anik ="y";
//  let tamim ='z';


//  let x = [1,2,3,4,5,6,7,8,9,20];

// let  obj = {};

// let cars  = ["a","b","c","d","j","y"];
// document.write(cars[4]);
// let cars = [];
// cars[0]="anik";
// cars[1]="mahfuz";
// document.write(cars[1])


// let cars = ["saab", "Voolvo", "Bmw","Mahfuz","Arif"];
// cars[0] = "Bike";
// // document.write(cars);
// document.getElementById("array").innerHTML = cars;
// //  cars[3] = cars.pop();
// // cars[2] ="Rakib";
//  // let unshift = cars.unshift("Ricshaw");
//  let car=cars.slice(5);
// document.write(car);

// let x = 70;

// // &&
// // ||

// if(x>=33 && x<=40){
//    document.write("D");
// }
// else if(x>=70){
//     document.write("A");
// }
// else{
//     document.write("Fail");
// }

// function myrondom(min,max){
//     let math=Math.floor(Math.random()*(max-min))
//     document.getElementById("demo").innerHTML=math;
// }
// myrondom()
//  let n=5;

//  for(let a=5;a>=1;a--){
//     // document.write("1")
//     for(let b=1;b<=((2*a)-1);b--){
//         document.write("*")
//         // document.write("*")
//     }
//     document.write("<br>");
//  }


// //  right peramid
//   for(let i=1;i<=n;i++){
//     // document.write(i);
//       for(let z=1; z<=n-i; z++){
//           console.log(z);
//          document.write("&nbsp");
//      }
//       for(let k=1;k<=((2*i)-1);k++){
// //         console.log(k);
//          document.write("*");
//       }
     
//       document.write("<br>");
//   }

// Event Number
let array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i=1;i<=array.length;i++){
    // document.write(i);
   if(i%2!=0){
    document.write(i);
   }else{
    document.write(" ")
   }
   document.write("<br>")
}
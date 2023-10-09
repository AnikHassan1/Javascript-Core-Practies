// let text =new String ("john Doe Anik");// string convert object
// document.write(typeof(text))
// document.write(text.length)

// //(x === y) true or false?

// let x = new String("John");
// let y = new String("John");
// document.write(x===y);// two object always false

// //string methods
// let a = "anik mia mia mia";
// document.write(a.replaceAll("mia","Hassan")+"<br>")
// // concat
// let z=x.concat(" ",y);
// document.write(z+"<br>")
// // String Search
// document.write(a.indexOf("mia")+"<br>")
// document.write(a.lastIndexOf("a")+"<br>")
// document.write(a.match("a")+"<br>")
// document.write(a.includes("a")+"<br>")

// html template
// let header = "Templates Literals";
// let tags = ["template literals", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;

// for(const num of tags){
//     html +=`<li>${num}</li>`
// }
// html += `</ul>`;
// document.getElementById("demo").innerHTML = html;

// let str = "template";
// let arr =["javascript","es6"]
// let html = `<h2>${str}</h2><ul>`;
// for(const nam of arr){
//  html+=`<li>${nam}</li>`;
// }
// html+=`</ul>`;
// document.getElementById("demo").innerHTML=html;


// let names = "template Works";
// let  arr = ["Html","css","booststrap","javascript"];
// let text2 = `<h1>${names}</h1><ul>`;

// for(const c of arr){
//     text2+=`<li>${c}</li>`;
// }
// text2+=`</ul>`;
// document.getElementById("demo").innerHTML=text2;

//array method
// let array =["anik","hassan","tamim"];
// let array2 =["anik","hassan","tamim","sojib","arafat"];
// let pop =array.pop();
// let push =array.push("habib");
// let shift = array.shift();
// let unShift = array.unshift("naim");
// let join = array.join("join");
// document.write(array.concat(' ',array2))
// document.write(array.splice(1,0,"I"))

//array sort
// let arr =[48,39,21,21,1]
// // document.write(arr.sort(function(a,b){return b-a}))
// // document.write(arr.reverse())
// let a=arr.push(9);
// let p=arr.pop();
// let s=arr.shift();
// let u=arr.unshift("hasan")
// document.write(arr+"<br>")
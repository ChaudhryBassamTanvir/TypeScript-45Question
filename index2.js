"use strict";
// let a="pakistan"
// a=9
// console.log(a)
// const a =5
// a++
// console.log(a)
// let myname=<any>{id:1,name:"b"}
//  myname={id:1,name:"b"}
//  myname={id:1,name:"b",gender:false}
//  myname={id:1,gender:false}
//  console.log("bassam");
// let c=((a,b)=>++a)(1,2);
// console.log(c);
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var col = Color[2];
console.log(col);

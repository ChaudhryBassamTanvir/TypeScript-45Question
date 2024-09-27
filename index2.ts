// let a="pakistan"
// a=9
// console.log(a)
const a =5
a++
console.log(a)

let myname=<any>{id:1,name:"b"}
 myname={id:1,name:"b"}
 myname={id:1,name:"b",gender:false}
 myname={id:1,gender:false}
 console.log("bassam");
 

let c=((a,b)=>++a)(1,2);
console.log(c);
enum Color{red=1,green,blue}
var col:string=Color[2]
console.log(col);
function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x:any): any {
    if (typeof x === "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x === "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

var f:(arg0: string)=>string;
f=x=>'('+x+')';
var h:((arg0: string)=>string)[]
h=[]
h.push(f)
console.log(h[0]("h"));



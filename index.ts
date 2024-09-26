//Q2 Personal Message 

let PerName:string="Hashim Kardar";
console.log("Hello "+PerName+" would you like to learn some Java today?");

//Q3 NameCases

console.log(PerName.toUpperCase());

console.log(PerName.toLowerCase());

console.log(PerName[0].toUpperCase()+PerName.slice(1));//slice(1) has extracted the first word of the string

//Q4 Famous Person quote with name

console.log("Haneen once said:'Hashim sab sambhal le ga' and \n 'he is not going down without a fight' ");

//Q5 repeat exercise 4 


let Ayshay = "Ayeshay Gull";
console.log(`${Ayshay} once said " Achi larkiyan na'mehram ke muhabbat khtm hone pr roti ni balkay Allah ka shukar ada karti hn" or \n "achi larkiyan chupay hoe dost nahi banati"`);

//Q6 Stripping Names


let nameWhiteSpace:string=" \t Tara Raichand \n";//\t is for 5 spaces and \n is for line break
console.log("The name with whitespace is "+nameWhiteSpace);
 
console.log("The name without whitespace is "+nameWhiteSpace.trim());

//Q7 Each operation result is number 8

console.log("Addition result " + (5+3));

console.log("Subraction result " + (15-7));

console.log("Division result " + (16/2));

console.log("Multiplication result " + (2*4));

//Q8 Create four lines and appear 8 on it 

for(let i=0;i<4;i++){
    console.log("\t "+(5+3));
    console.log("_____________________");
    
}

//Q9 Favourite number 


let fvrtnum:number=5;
console.log("My fvrt number is "+fvrtnum);


//Q10 Adding comment 

console.log("I added comment regarding splice(),whitespace and many others in my programs ");


//Q11 Store names of friend in array 

let names:string[]=["Hashim Kardar" ,"Haneen Yousuf","Ayeshay Gull","Faris Gazi","Zumar Yousuf","Salar Sikandar","Halay Noor","Jibreel Grewal"];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
    
}

//Q12 Greeting

for(let i=0;i<names.length;i++){
    console.log(`Hi my name is ${names[i]} nice to meet you`);
}

//Q13 Your own array

let planes:string[]=["A380-Airbus","boeing-777","Concorde","Airbus-A340"]
for(let i=0;i<planes.length;i++){
    console.log(`i would like to own ${planes[i]} `);
}


//Q14 Guest List 


let guestList:string[]=["Zumar Yousuf "," Taliya Murad","Adam-bin-Muhammad","Jawahraat"];
for(let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]} you are invited to have a dinner with me. It's really a pleasure for me`);
}


//Q15 remove one and add another one name in the list

console.log(guestList[3]+" cann't arrive due to some personal issue");
guestList.pop();
guestList.push("Umme-Khanam");
console.log("The new  guest who is coming "+guestList[3]);
for(let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]} you are invited to have a dinner with me. It's really a pleasure for me`);
}


//Q16

guestList.unshift("Salar Sikandar");//element at begining of array
console.log(guestList);

guestList.push("Hameen sikandar");//element at last of array
console.log(guestList);
guestList.splice(2,0,"Bassam");//name at middle
console.log(guestList);

for(let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]} we found an amazing venue for our dinner location is shared. Please come :)`);
}

//Q17 Shrink the above list

console.log("OOPS! You invite only two people for dinner");
for(let i=guestList.length-1;i>1;i--){
    console.log(`Sorry due to some reason we are cancelling our dinner sorry for inconvince mr/mrs ${guestList[i]}`);
    guestList.pop();
    
   
}

console.log("The person who are still invited "+ guestList);//the persons who are still invited to the dinner
for(let i=0;i<guestList.length;i++){
console.log( `You guys are still invited to the dinner. Please Mr/Mrs ${guestList[i]} please arrive on time`);
}

for(let i=guestList.length-1;i>=0;i--){
guestList.pop();

}
console.log(guestList);//empty array

//Q18 visit places
let vistPlace:string[]=["Turkey","London","Korea","Japan","Chile","Saudia Arabia","UAE"];

console.log("The list is");

for (const place of vistPlace) {
    console.log(place);
    
}


let sortPlaces=[... vistPlace].sort();
console.log("The places in sorted form without modifying the original is");
for (const place of sortPlaces) {
    console.log(place);
    
}
  
console.log("Original Array");
 console.log(vistPlace);
    
console.log("Reversed list is");
let reverse= vistPlace.reverse();
for (const place of reverse) {
    
    console.log(place);
}

let reverseSort=[... reverse ].sort();
console.log("Reverse sorted list");
for (const place of reverseSort) {
    
    console.log(place);
}


console.log("again reverse the above list");
let reverseSortedList=reverseSort.reverse();
for (const place of reverseSortedList) {
    
    console.log(place);
}


//Q19 indicate no. of ppl u invited to dinner in ex 14
let guestInvite=0;
for(let i=0;i<guestList.length;i++){
    if(guestList[i]!=""){
        guestInvite+=1;
    }

}
console.log("The number of guest invited on dinner are "+guestInvite);

//Q20 print list

let languages:string[]=["Urdu","English","Turkish","Korean","Punjabi","Arabic","Persian"]
console.log("Display list of Languages");
for(let lang of languages){
    console.log(lang);
    
}

//Q21 Create object 
let typeScript={
    names:"Bassam",
    age :19,
    job:"Emirates"
}
console.log(typeScript);

//Q22 Conditional error

let numbers=[1,3,4,5];
// console.log(numbers[5]);//this create the error
console.log(numbers[3]);

//Q23 Conditional Test 
let number = 10;
let string = 'Jny ';
let boolean = true;
let array1 = [3, 2, 4];
let array2 = [3, 2, 4];
let object1 = { name: 'Bassam',age: 13 };
let object2 = { name: 'Bassam',age:14 };
let object3 = { name: 'Jny',age:14 };

//Test 1 
console.log("Test 1: Is number ==10?I predict true ");
console.log(number==10);//true

//Test 2
console.log("Test 2: Is String=='Jny'? I predict True");
console.log(string=='Jny');

//Test 3
console.log("Test 3: Is boolean== true? I predict True");
console.log(boolean==true);

//Test 4
console.log("Test 4: array1 and array2 are same? I predict True");
console.log(array1==array2);

//Test 5
console.log("Test 5: object1 and object2 are same? I predict True");
console.log(object1==object2);

//Test 6
console.log("Test : Is number is == 5? I predict True");
console.log(number==5);

//Test 7
console.log('Test 8: Is string is != Effi ? I predict False ');
console.log(string!='Effi');

//Test 8
console.log('Test 8:array1[2]==array[2] ? I predict True ') ;
console.log(array1[2]!=array2[2]);

//Test 9
console.log("Test 9: object1.name == object2.name  are same? I predict True");
console.log(object1.age != object2.age);

//Test 10
console.log("Test 10: Object1.name != Object3.name are same? I predict True");
console.log(object1.name != object3.name);

//Q24 More comaprisons
let string1 = 'apple';
let string2 = 'banana';
let num1 = 9;
let num2 = 5;
let array = [1, 2, 3, 4, 5];
let itemCheck = 3;
let itemNotInArray = 6;

// 
console.log("Equality Test for Strings: Is string1 == 'apple'? I predict True.");
console.log(string1 == 'apple'); 

console.log("Inequality Test for Strings: Is string2 != 'apple'? I predict True.");
console.log(string2 != 'apple'); 


console.log("Lowercase Test: Is string1 lowercase 'apple'? I predict True.");
console.log(string1.toLowerCase() == 'apple'); 

// Numerical tests
console.log("Equality Test for Numbers: Is num1 == 9? I predict True.");
console.log(num1 == 9); 

console.log("Inequality Test for Numbers: Is num2 != 10? I predict True.");
console.log(num2 != 10); 

console.log("Greater Than Test: Is num1 > num2? I predict True.");
console.log(num1 > num2); 

console.log("Less Than Test: Is num2 < num1? I predict True.");
console.log(num2 < num1); 

console.log("Greater Than or Equal To Test: Is num1 >= num2? I predict True.");
console.log(num1 >= num2); 

console.log("Less Than or Equal To Test: Is num2 <= num1? I predict True.");
console.log(num2 <= num1); 

//  "and" and "or" operators
console.log("And Operator Test: Is (num1 > num2) && (num2 < 7) true? I predict True.");
console.log((num1 > num2) && (num2 < 7)); // True

console.log("Or Operator Test: Is (num1 > 15) || (num2 < 3) true? I predict False.");
console.log((num1 > 15) || (num2 < 3)); // False

//  item is in an array
console.log("Array Includes Test: Does array include the itemCheck (3)? I predict True.");
console.log(array.includes(itemCheck)); // True

//  item is not in an array
console.log("Array Excludes Test: Does array exclude the itemNotInArray (6)? I predict True.");
console.log(!array.includes(itemNotInArray)); // True

//Q25 Alien color 1
let alien_color= "green";
if (alien_color=="green") {
    console.log("You got 5 points");
    
}else{
    console.log();
    
}
//Q26 Alien color 2 

//Version 1
alien_color="green";
if (alien_color=="green") {
console.log("You earn 5 points for shooting the alien");
    
}else {
  console.log("Player just earned 10 points");
    
}
//Version 2
alien_color="Yellow";
if (alien_color!="green") {
    console.log("You earn 10 points ");
        
    }else {
      console.log("Player just earned 5 points");
        
    }

//Q27 Alien color 3

//Version 1
alien_color="green";
if (alien_color=="green") {
    console.log("Player earned 5 points");
    
    
} else if (alien_color=="yellow") {
    console.log("You earned 10 points");
    
    
} else if (alien_color=="Red") {
    console.log("You earned 15 points");
    
}else {
    console.log("Unknow color");
    
    
}

//Version 2
alien_color="red";

if (alien_color=="green") {
    console.log("Player earned 5 points");
    
    
} else if (alien_color=="yellow") {
    console.log("You earned 10 points");
    
    
} else if (alien_color=="red") {
    console.log("You earned 15 points");
    
}else {
    console.log("Unknow color");
    
    
}
//Version 3
alien_color="yellow";

if (alien_color=="green") {
    console.log("Player earned 5 points");
    
    
} else if (alien_color=="yellow") {
    console.log("You earned 10 points");
    
    
} else if (alien_color=="Red") {
    console.log("You earned 15 points");
    
}else {
    console.log("Unknow color");
    
    
}


//Q28 Stages of life
let age =18;
if (age>2) {
    console.log("That person is a baby");
    
}else if (age<=2 && age >4 ) {
 console.log("That person is a toodler");
     
}
else if (age<=4 && age >13 ) {
 console.log("That person is a kid");
     
}
else if (age<=13 && age >20 ) {
 console.log("That person is a Teenager");
     
}
else if (age<=20 && age >65 ) {
 console.log("That person is a adult");
     
}else{
    console.log("That person is an elder");
    
}
//Q29 Favourite fruit

//Check Independent
let favoriteFruits:string[]=["Avocado","Mango","Grapes","kiwi","Banana"];
let fruitcheck="banana"
if (favoriteFruits.includes(fruitcheck)) {
    console.log(`I love ${fruitcheck}! It's one of my favorite fruits.`);
} else {
    console.log(`I don't have ${fruitcheck} in my list of favorite fruits.`);
}

fruitcheck = "grape";

if (favoriteFruits.includes(fruitcheck)) {
    console.log(`I love ${fruitcheck}! It's one of my favorite fruits.`);
} else {
    console.log(`I don't have ${fruitcheck} in my list of favorite fruits.`);
}

fruitcheck = "kiwi";

if (favoriteFruits.includes(fruitcheck)) {
    console.log(`I love ${fruitcheck}! It's one of my favorite fruits.`);
} else {
    console.log(`I don't have ${fruitcheck} in my list of favorite fruits.`);
}
//create new array and check list
let fvrtFruit:string[]=["Avocado","Mango","Cheeko"];
let fruittoCheck="Avocado";
    if (fvrtFruit.includes(fruittoCheck)) {
        console.log(`you really like ${fruittoCheck}`);
          
    }
    fruittoCheck="Mango";
    if (fvrtFruit.includes(fruittoCheck)) {
        console.log(`you really like ${fruittoCheck}`);
          
    }
    fruittoCheck="Cheeko";
    if (fvrtFruit.includes(fruittoCheck)) {
        console.log(`you really like ${fruittoCheck}`);
          
    }

    fruittoCheck="kiwi";
    if (fvrtFruit.includes(fruittoCheck)) {
        console.log(`you really like ${fvrtFruit}`);
          
    }
    fruittoCheck="Banana";
    if (fvrtFruit.includes(fruittoCheck)) {
        console.log(`you really like ${fruittoCheck}`);
          
    }
    

    //Q30 Hello Admin

    let userNames:string[]=["Admin","Bassam","Haddi","Mohid"];
    for(let i=0;i<userNames.length;i++){
        if (userNames[i]=="Admin") {
            console.log("Hello admin, would you like to see a status report?");
            
            
        }else{
            console.log(`hello ${userNames[i]} thanks for logging in `);
        }
    }

    //Q31 No users
    //check the list is empty or not
        if (userNames.length==0) {
            console.log("The list is empty");
                
        }else{
            console.log("the list is not empty");
            
        }
        //if empty than five msg to find some users

        if (userNames.length==0) {
            console.log("we need to find some users");
            
            
        }
    //empty your list and print msg 
        for(let i=userNames.length-1;i>=0;i--){
         userNames.pop();
        }
         if (userNames.length==0) {
            console.log("The username list is empty");
            
            
        }

//Q32  Checking Users 
let curr_Users:string[]=["Bassam","Ali","Fatima","Hassan"];
let New_Users:string[]=["Alif","Sanan","Dodo","Hassan"];
 
curr_Users=curr_Users.map(users =>users.toLowerCase());
New_Users=New_Users.map(user =>user.toLowerCase());

for(let users of New_Users){
    if (curr_Users.includes(users)) {
        console.log(`Username ${users} is not available select another one`);
        
        
    }else{
        console.log(`Username ${users} is available`);
        
    }
}

//Q33 Ordinal Numbers
let arrNum:number[]=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<arrNum.length;i++){
    if (arrNum[i]==1) {
        console.log(`${arrNum[i]}st`);
        
        
    }else if (arrNum[i]==2) {
        console.log(`${arrNum[i]}nd`);
        
        
    }else if (arrNum[i]==3) {
        console.log(`${arrNum[i]}rd`);
        
        
    }
    else{
        console.log(`${arrNum[i]}th`);
        
    }
}
//Q34 Pizza 
let pizza:string[]=["Home Town ","Italiano","Malai boti"];


for(let i=0;i<pizza.length;i++){
    console.log(pizza[i]);
    
}
 
pizza.forEach(prLine=>console.log(`i like ${prLine} very much`));

console.log(`I like ${pizza[1]} very much. I like it because it is full of chees and its not too much spicy.Moreover it cotain less capicium. It is really very taste no doubt i can eat it everyday`);

//Q35 Animals 
let Animals=[
    {
        name:"dog",
        breed:"german",
        age:1,
        color:"black and grey"
    },
    {
        name:"cat",
        breed:"Persian",
        age:2,
        color:"White"

    },{
        name:"Rabbit",
        breed:"Wild",
        age:3,
        color:"black and grey"
    }
];
for(let i=0;i<Animals.length;i++){
    console.log(Animals[i].name);
    
}
 
Animals.forEach(line=>console.log(`${line.name} would be a great pet`))

console.log("Any of these animals would make great pets!");

//Q36 T shirt 
function make_shirt(size:string,sent:string):string{
 return `The shirt is of ${size} size and print ${sent} on this`;

}
let size="Medium";
let sent="바쌈은 놀랄만한 배우입니다."
console.log(make_shirt(size,sent));

//Q37 large shirt 

function makeshirt(size:string="large",message:string="I love Typescript",color:string="") {
console.log(`The shirt is of size ${size} and message is ${message}`);
 
}

makeshirt();
makeshirt("medium");
makeshirt("small","I love Java");

//Q39 City Names 
function city_country(city:string,country:string) {
  console.log(city,country);
    
    
}
city_country("lahore","Pakistan");
city_country("Istanbul","Turkey");
city_country("Seoul","Korea");

//Q40 Album 

function make_album(artist: string, title: string, trackno?: number): object {
    let album:{ artist: string, title: string, trackno?: number } = {
        artist: artist,
        title: title
    };

    if (trackno != undefined) {
        album.trackno = trackno;
    }

    return album;
} 
console.log(make_album("Aarohi","Ishq mein marjawan"));
console.log(make_album("Salar","Yaar batheray mil jande jannat kamana okhi aye",12));
console.log(make_album("Mahi","la la la la la"));

   





//Q41 Magicians
function show_magicians(mag:string[]){
    mag.forEach(element => {
        console.log(element);
        
        
    });
}
//Q42 modify name of magician 
let Magicians:string[]=["Salar","Alizay","Eva","Eda"];
function make_great(name:string){
    return "great "+name;
}

let greatMag=Magicians.map(make_great)
show_magicians(greatMag);

//Q44 Sandwiches
function sandWhich(Sandwiches:string[]){
    console.log("Sandwhich Ingredients");
    if (Sandwiches.length==0) {
        console.log("There is no items");
        
        
    }
    else{
        console.log("items in the sandwhic are");
for( let items of Sandwiches){
    console.log("-"+items);
    
}
        
    }
    
} 

console.log(sandWhich(["Cheese","White sauce ","Chicken","Egg"]));
console.log(sandWhich(["Cheese","Mayo ","butter","Egg","Red chili"]));
console.log(sandWhich(["Chicken sauce ","butter","Egg","Jelly"]));

//Q45 Cars
function cars(nam:string,model:string, ... options:any[] ){
let   info:{[key:string]:string}={
        "names":nam,
        "model":model

    };
    for (let i = 0; i < options.length; i += 2) {
        if (i + 1 < options.length) {
            let key = options[i];
            let value = options[i + 1];
            info[key] = value;
        }
    }


  return  info;
    
   
}
console.log(cars("Toyota","German","Color","Blue","Year","2021"));




















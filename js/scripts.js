{
    var x=5;
    let y=10;
    x=14, y=44
    console.log(x,y)
}
console.log(x);
{
    let a=1
    a+=' "/'+ '"';
    console.log(a);
}

{
    const pi=3.1415;
    console.log(pi);
    
}

const car={
    carname:"Fiat",
    model:"500",
    year:"2012",
    color:"red",
};
console.log(car);
console.log(car.color+" "+car.model)

const student={
    firstname:"lasha",
    lastname:"jhorjholiani",
    age:"13",
    height:"1.73",
    fullname: function(){
        return this.firstname+" "+this.lastname;    
    }
};

console.log("სახელი:"+student.firstname+ " გვარი:"+student.lastname)

console.log(student.fullname())

const masw={
    firstname:"salome",
    lastname:"gachechiladze",
    age:"25",
    height:"1.60",
//     fullname: function(){
//         return this.firstname+" "+this.lastname;   
    
// }
};
// console.log(masw.fullname())

let maswfullname=student.fullname.bind(masw);
console.log(maswfullname()); 

const dog={
    firstname:"coco",
    lastname:"amirejibi",
    age:"5",
    weight:"10",
    lekvi:{
        firstname:"coco2",
    lastname:"amirejibi"
    }
};
let dogfullname=student.fullname.bind(dog);
console.log(dogfullname());

let car1="volvo", car2="fiat", car3="pejo";
let cars=["volvo", "fiat", "pejo", ];
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[3]);
console.log(cars.length);
console.log(cars[cars.length-1]);
cars[3]="kia";
console.log(cars);
cars.pop();
console.log(cars);
cars.push("mercedes");
console.log(cars);
cars.sort();
cars.reverse();
console.log(cars);
const cars2=["kia","opel"];
const manqanebi=cars2.concat(cars);
//concat აერთიანებს ერთ მასივს(მწკრივს) მეორესთან, მესამე მასივის დამატება თუ გვენდომება cars-ის შემდეგ მძიმეს დავწერთ და დავუწერთ გვერდით ახალ მასივს. ეს ახალი გაერთიანებული მასივი არ იქნება ანბანის მიხედვით დალაგებული და თუ გვინდა რომ დალაგდეს დავწერთ მანქანები sort
console.log(manqanebi);
manqanebi.sort;

console.log(manqanebi[0]);
console.log(manqanebi[2]);

for(let i=0; i<manqanebi.length; i++){
    console.log(manqanebi[i]);
}

function gamravleba(a,b){
    return a*b
}
console.log(gamravleba(3,6));

const nav=[
    "home", "about", "courses", "offers", "contact", "location"];
const links=["index.html", "about.html", "courses.html", "offers.html", "contact.html", "location.html"];
let navsigrdze=nav.length;
let navtext='<ul class="flex">';
for(let i=0; i<navsigrdze; i++)
{ navtext+='<li><a href="'+links[i]+'">'+ nav[i]+"</a></li>";

    console.log(navtext);
}
navtext+="</ul>"
console.log(navtext);
document.getElementById("nav").innerHTML=navtext;

function shedareba(){
    let paroli1=document.getElementById("password").value;
    let paroli2=document.getElementById("repassword").value;
    
    console.log(paroli1);
    console.log(paroli2);

    if(paroli1=="" || paroli2=="" || paroli1!=paroli2)
    {
        console.log("ar emtxveva");
        document.getElementById("answer").innerHTML="პაროლები არ ემთხვევა ერთმანეთს!";
        document.getElementById("answer").style.color ="#ff0000";
        document.getElementById("password").style.border="1px solid #ff0000";
        document.getElementById("repassword").style.border="1px solid #ff0000";
    }
    else{
        console.log("emtxveva");
        document.getElementById("answer").innerHTML="პაროლები ემთხვევა ერთმანეთს";
        document.getElementById("answer").style.color ="#00ff00";
        document.getElementById("password").style.border="1px solid #000000";
        document.getElementById("repassword").style.border="1px solid #000000";
    }
}
// const itsMe ={
//   firstName :"kim",
//   lastName : "jongyoon",
//   age:0,
//   email:"kimsilveryoon96@gmail.com",
//   phone:"iphone13",
//   address:"biraedong",
//   like:"maratang",
//   hate:"soy",
//   hobby:"sleep",
//   coffe:"hate",
//   food:"solt",
//   sleepTime:"everyday",
// }

function gaein(firstName,lastName,age,email,phone,address,like,hate,hobby,coffee,food,sleepTime){
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  this.email=email;
  this.phone=phone;
  this.address=address;
  this.like=like;
  this.hate=hate;
  this.hobby=hobby;
  this.coffee=coffee;
  this.food=food;
  this.sleepTime=sleepTime
}

let names= ["kim","lim","lee","park"];
let lnames= ["jong","yoon","mungk","park"];
let age= ["1","2","3","4","5","6"];
let email= ["naver.com","nate.com","daum.net","google.com"];
let phone= ["blackberry","xiome","sony","HTC"];
let address= ["biraedong","goongdong","songchong","doonsan"];
let liketh= ["sleep","eating","fever","good"];
let hateth= ["human","man","woman","etc"];
let hobbyth= ["drive","eating","good","show"];
let cohhee= ["mega","pakk","starbok","idde"];
let foodth= ["kimchi","dumbuk","ori","dig"];
let babyth= ["eight","seven","princess","good"];






// let members=new gaein("kim","jongyoon","3","cute.naver.com","iphone","biraedong","maratang","soy","sleep","mega","dog","non");
let members=[];
 for(let i=0; i<4; i++){
 members.push(new gaein(names[i],lnames[i],age[i],email[i],phone[i],address[i],liketh[i],hateth[i],hobbyth[i],cohhee[i],foodth[i],babyth[i]));
 }
console.log(members);
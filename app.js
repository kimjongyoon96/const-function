const fs=require('fs');

function user(id,password,email){
  this.id=id,
  this.password=password,
  this.email=email
}


const d= new user("kimjongyoon","1234","kimjongyoon@gmial.com");
const e= new user("daljae","1234","daljae@gmail.com");
const f= new user("jieun","1234","jieun@gmail.com");

//json 만들기 위해서 정의한 곳
 let names=["kim","yoon","yiie"];
 let password=["1234","1234","1234"];
 let emails=["kimjongyoon@gmial.com","daljae@gmail.com","jieun@gmail.com"]

let members=[];
for(let i=0; i<3; i++){
members.push(new user(names[i],password[i],emails[i]));
}
// 파일을 json 화 시키는 것이다. 
// 이것을 만들어주니, members.JSON 파일이 만들어졌다.
// 이것은, API를 만들었다는 뜻과 동일하다.
// null ,2 를 추가해주면 이쁘게 JSON 내용이 이쁘게 된다.
fs.writeFileSync("members.JSON",JSON.stringify(members,null,2),"utf8");



console.dir(members);
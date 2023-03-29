// JS말고 "자바" 형식의 작성법
// 객체를 여러개 만들기 힘들떄 혹은 객체 여러개 다룰줄 알아야 할때 사용
//  대규모의 작업을 진행할수 있는 능력
// 회원가입 폼 -> post~ 서버전달 -> 데이터 받을때 -> 객체로 묶는다.
// 객체로 묶어서 -> "객체" 를 DB에 새긴다.
// post -> DB 쓰기 => 간단하긴 하지만 절대로 권장하지 않는다.
// 일련의 필터링이 필요하다.  
const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

class user{
  constructor(order,name){
    this.order=order;
    this.name=name;
  }
  set order(order){
    if(typeof(order)==="number"){
      this._order=order;
      console.log('숫자입니다');
    }
  }
}
let test=[];
studentList.forEach((student,index) =>{
  test.push(new user(index,student));
});
console.log(test);
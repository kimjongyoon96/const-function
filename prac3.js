const country = [
  "북한",
  "콩고",
  "소말리아",
  "러시아",
  "네덜란드",
  "과테말라",
  "대만",
  "중국",
  "요르단",
  "폴란드",
  "프랑스",
  "영국",
  "몽골",
  "일본",
  "브라질",
  "미국",
  "캐나다",
  "독일",
  "프로이센",
  "그리스",
  "이탈리아",
  "필리핀",
  "옥저",
  "고구려",
  "시리아",
];


class user{
  constructor(order,demo,name){
    this.order=order;
    this.name=name;
    this.demo=demo;
  }
  set order(order){
    if(typeof(order)==="string"){
      this._order=order;
    }
    
  }

  


}
let test=[];
// foreach 는 남이만드것, 규격이 정해져있음
// 나머지 순서는 만드는 사람 마음.
// order, name .. foreach의 규격
country.forEach((country,index) =>{
  test.push(new user(country,index));
});
console.log(test);

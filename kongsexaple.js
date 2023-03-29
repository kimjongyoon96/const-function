










function a(email,agreeEmailAddress){
  // 1. 이메일이 문자열로 작성되어있는지 검사
  if(typeof (email) === "string" && Array.isArray(agreeEmailAddress)===true){
 // 문자열이라면 참 
 // Array.from => 배열로 처리할 수 있게끔 처리

 Array.from(email).forEach((element) => {
  if(element ==="@"){
    //문자열에 "@" 골뱅이(atsign)가 포함되어있는지 검사
    console.log("이메일 형식이 맞습니다.");

    let emailSplit =[];
    emailSplit =email.split("@"); // 이메일 문자열을 @ 기준으로 나누어 배열 저장
    console.log(emailSplit);
    agreeEmailAddress.filter((element) =>{
      if(element === emailSplit[1]) {// 매개변수로 받은 이메일 주소 목록(가정)과 일치하는지 검사
      console.log("이메일 도메인이 일치합니다.");
      return true // 승인(유효성 검사)
      //모든 것이 맞아 떨어진다면 해당 return 부분에서 이메일 체크 함수가 종료된다,   
      }else{
        console.error("이메일 도메인이 일치하지 않습니다.");
      }
    });

  }else {
    new Error("이메일 형식이 아닙니다.");
  }
  
 });

} else{
  console.error("이메일은 문자열이어야 합니다.");
}

  
}

export default a;
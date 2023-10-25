function getParameter(paraName){
  // 쿼리스트링에서 파라미터 값 얻어오기
  // 만약 쿼리스트링에 paraName이 없다면 null을 반환한다.
  let returnVal = null;
  let url  = location.href;

  if (url.indexOf("?") != -1) {
    // 쿼리 스트링이 있는 경우
    let queryString = url.split("?")[1];
    let queryStringArr = queryString.split("&");

    for (let item of queryStringArr) {
      if (item.split("=")[0] == paraName) {
        returnVal = item.split("=")[1];
        break; // 파라미터 값을 찾으면 해당 반복문 블럭을 빠져나감
      }
    }
  }

  return returnVal;
}







function readCookie(searchName){
  let returnVal = null;
  let cook = document.cookie;
  let cookArr = cook.split(";"); // 각 요소에 쿠키가 하나씩 들어감
 
  for(let i = 0; i < cookArr.length; i++){
      let cookName = cookArr[i].split("=")[0];
      if(cookName.trim() == searchName){ // trim = 앞뒤 공백만 제거
      // 쿠키를 찾았다! searcName쿠키의 값을 띄워줘야 함.
        returnVal = cookArr[i].split("=")[1];
        return returnVal;
      }
    }

    return returnVal;
  }

  function saveCookie(cookieName, cookieValue, expires) {
    let now = new Date();
    now.setDate(now.getDate() + expires); // 만료일 세팅 (일 단위로)

    let tmpCookie = cookieName + "=" + cookieValue + ";expires" + now.toUTCString();

    // 쿠키 저장
    document.cookie = tmpCookie;
  }

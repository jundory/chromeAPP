//new Date() : js객체. 날짜표기
//padStart(a, "b") : a자릿수가 아닌 숫자앞에 b를 붙임 (꼭 String을 통해 문자열로 변환)


const clock = document.querySelector("h2");

function getClock(){
    const date = new Date(); //이건 왜 함수 밖에 두면 미적용?
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`
)}

getClock();
setInterval(getClock, 1000);
//event : 첫번째 argument에는 함수에 대한 정보가 담겨있음(생략가능)
//preventDefault : 브라우저 제어기능. js내장함수
//localStorage.(getItem/setItem/remove) : 브라우저 자체 API
//내가 쓰던 기존 방식 :style.display를 통해 컨트롤.
//새롭게 배운 방식 : classList.(add/remove)를 통해 컨트롤.

const loginForm = document.querySelector("#login-form");
const loginInfut = document.querySelector("#login-form input");
const h1 = document.querySelector("h1");
const USERNAME_KEY = "username";

//event가 발생했을 때 브라우저가 실행하는 함수
function onsubmit(event){
   event.preventDefault();
   loginForm.classList.add("hidden");
   localStorage.setItem(USERNAME_KEY, loginInfut.value);
   // h1.classList.remove("hidden");
   // h1.innerText = `Hello, ${WriteUserName}`;
   hOne();
}

//<h1>을 컨트롤하기 위해 만든 함수
function hOne() {
   const WriteUserName = localStorage.getItem(USERNAME_KEY);
   h1.classList.remove("hidden");
   h1.innerText = `Hello, ${WriteUserName}`;
}

//js가 여기서부터 읽기 시작
//브라우저 api에 저장되는 username(KEY)를 가져오고 변수에 할당
const SaveUserName = localStorage.getItem(USERNAME_KEY);


//조건문을 읽고 KEY가 없으면 참이므로 이벤트 발생, 있으면 <h1>함수를 읽음.
if(SaveUserName === null) {
   //show the loginForm
   loginForm.classList.remove("hidden");
   loginForm.addEventListener("submit", onsubmit);
} else {
   // h1.classList.remove("hidden");
      // h1.classList.remove("hidden");
      // h1.innerText = `Hello, ${SaveUserName}`;
      hOne();
}
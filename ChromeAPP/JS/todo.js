// JSON.(springify/parse) = 전자는 문자로,후자는 배열로
// forEach : map과 비슷하지만 배열의 요소마다 함수를 실행하고 그침.
// filter : 실행결과가 true인 값만 모아서 새로운 배열 리턴
//parseInt : 문자열을 숫자로 바꿔줌

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let toDos =  [];

//평범한 문자를 변수에 저장할땐 대문자로
const TODOS_KEY = "todos";

//로컬스토리지에 저장하는 함수
function saveTodos (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//X버튼을 누르면 사라지는 함수
function deleteTodo(event){
//            event.가 일어난 위치(여기선 span).의 부모(여기선 li)
// const li = event.target.parentElement;

//this는 자기 자신,(사용된 위치의 한칸 위. 즉, this를 읽는 곳을 찾으면 됨.)
// --> this가 사용된 해당 함수 deleteTodo()는 button.addEventListener("click", deleteWrite);에서 읽혀짐. 이건 button? span?
const li = this.parentElement;
//remove는 내장함수
li.remove();
//처음 만들었던 toDos변수 값을 filter를 통해 재배열하고,(li.ids문자를 숫자로)
toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
//

//로컬스토리지에 저장
saveTodos();
};


//화면에 뿌려주는 함수
function paintTodo(write){
    const li = document.createElement("li");
    li.id = write.id; //List에 id값 부여.
    const span = document.createElement("span");
    span.innerText = write.text;
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    
}


//submit이벤트가 발생할 때 쓰이는 함수
function handleTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    //제출 시 입력값 초기화
    todoInput.value = "";
    
    //입력값을 toDos배열에 푸쉬
    toDos.push(newTodoObj);
    //입력값을 화면에 뿌려주는 함수
    paintTodo(newTodoObj);
    //입력값을 로컬스토리지에 저장
    saveTodos(); 
}

todoForm.addEventListener("submit", handleTodo);

//로컬스토리지의 키값을 가져와 변수에 저장
const savedTodos = localStorage.getItem(TODOS_KEY); 
//if문으로 key가 있을 경우에만 그 값을 JSON.parse를 통해 배열로 변환.
if(savedTodos !== null){
    const parseTodos = JSON.parse(savedTodos);
// 배열 parseTodos의 요소마다 인자로 전달받는 콜백함수 paintTodo를 한번씩 실행
    parseTodos.forEach(paintTodo);
    toDos = parseTodos;
}



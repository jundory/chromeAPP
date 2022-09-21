const clock = document.querySelector("h2");

function getClock(){
    // clock.innerText = 
    const date = new Date(); //이건 왜 함수 밖에 두면 미적용?
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
)}

// setInterval(getClock, 1000);
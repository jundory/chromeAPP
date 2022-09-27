//API 사용
//navigator.geolocation.getCurrentPosition(성공 시 실행할 함수, 실패 시 실행할 함수);

const API_KEY = "7ae1cde06f198952db32c1d004dab367";
                

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in.", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    //&units=metric` --> 뭘까

    //콜백함수로 프로미스값을 받는데 첫번째 인자로 받음(response, data..)
    fetch(url)
    .then((response) => {
        // if(!response.ok) {
        //     throw new Error('400아니면 500 오류남')
        //     }
        return response.json()
    })
    // 왜 중괄호 벗기니까 해결된거? 생활코딩 -> 체이닝방식은 return 넣을 것
    .then((data) => {
        console.log(data.name, data.weather[0].main);
    })
    // .catch((error) => {
    //     console.log('Error!')
    //   })
};

function geoError(){
    alert("can't find you.");
};

navigator.geolocation.getCurrentPosition(geoOk, geoError);
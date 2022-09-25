//API 사용
//navigator.geolocation.getCurrentPosition(성공 시 실행할 함수, 실패 시 실행할 함수);

const API_KEY = "7ae1cde06f198952db32c1d004dab367";

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in.", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}?units=metric`
    
    fetch(url)
    .then((response) => {
        response.json()
    })
    .then((data) => {
        console.log(data.name, data.weather[0].main)
    })
};

function geoError(){
    alert("can't find you.");
};

navigator.geolocation.getCurrentPosition(geoOk, geoError);
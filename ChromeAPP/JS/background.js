//createElement : 태그생성(js를 통해 html에 직접 관여)
//appendChild(??) : 자식 생성. 앞에 오는 태그 안에 ??를 넣음.

//1. 이미지를 랜덤으로 돌리는 스크립트

const images = ["0.jpeg", "1.jpeg" ]
//image값 임의로 출력.
const chosenImages = images[Math.floor(Math.random() * images.length)];


//2. html에 <img/src = img/"0.jpeg" or "1.jpeg">을 만드는 스크립트.

// HTML에 img태그를 만듦.
const bgImage = document.createElement("img");
// img태그에 src링크를 달아줌.
bgImage.src=`img/${chosenImages}`;
// 완성된 img태그를 body에 넣어줌.
document.body.appendChild(bgImage);
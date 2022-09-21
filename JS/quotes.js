const quotes = [

{   
    quote: "롤은 질병게임이다.",
    author: "jundol",
},
{   
    quote: "짜장면 식히신 분?",
    author: "혼나야지",
},
{   
    quote: "시작이 반이다.",
    author: "jundol",
},
{   
    quote: "가만히 있으면 반이라도 간다.",
    author: "jundol",
},
{   
    quote: "시작하고 가만히 있자.",
    author: "jundol",
},
{   
    quote: "날 선택해줄 줄은 정말 몰랐어.",
    author: "아무무",
},
{   
    quote: "널 꺾을 자는 너 자신 뿐이다.",
    author: "빵테온",
},
{   
    quote: "고용해주셔서 진짜 감사한데 집에 갈래요",
    author: "고진감래",
},
{   
    quote: "술로기운 생활",
    author: "Jundol",
},
{   
    quote: "유희열의 슥 케치북",
    author: "jundol",
},
];

const quote =  document.querySelector("#quote span:first-child");
const author =  document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * (quotes.length))];

quote.innerText = todaysQuote['quote'];
author.innerText = todaysQuote['author'];


const quotes = [
  {
    quote: "Если делаешь доброе, то не поднимаешь ли лица?",
    author: "Бытие 4:7"
  },
  {
    quote: "Будь тверд и мужествен, не страшись и не ужасайся; ибо с тобою Господь, Бог твой, везде, куда ни пойдешь.",
    author: "Иисус Навин 1:9"
  },  
  {
    quote: "Блажен муж, который не ходит на совет нечестивых и не стоит на пути грешных, но в законе Господа воля его, и о законе Его размышляет он день и ночь!",
    author: "Псалтирь 1:1-2"
  },
  {
    quote: "Может ли кто взять себе огонь в пазуху, чтобы не прогорело платье его",
    author: "Притчи 6:27"
  },
  {
    quote: "Не положу пред очами моими вещи непотребной.",
    author: "Притчи 100:3"
  },
  {
    quote: "Веселое сердце благотворно, как врачевство, а унылый дух сушит кости.",
    author: "Притчи 17:22"
  },
  {
    quote: "Пусть хвалит тебя другой, а не уста твои, — чужой, а не язык твой.",
    author: "Притчи 27:2"
  },
  {
    quote: "Приобретение мудрости гораздо лучше золота, и приобретение разума предпочтительнее отборного серебра.",
    author: "Притчи 16:16"
  },
  {
    quote: "Не хлебом одним будет жить человек, но всяким словом, исходящим из уст Божиих.",
    author: "Матфея 4:4"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const quoteContainer = document.getElementById("insert");
  const randomQuote = getRandomQuote();
  document.getElementById("insert").innerHTML = randomQuote.quote;
  document.getElementById("author").innerHTML = "-" + randomQuote.author;
}

window.onload = function() {
  displayQuote();
};

window.onload=function(){
  const generateQuoteBtn = document.getElementById("change-quote");
  generateQuoteBtn.addEventListener("click", displayQuote);
}
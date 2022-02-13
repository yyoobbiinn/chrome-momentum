const quotes = [
    {
        quote: "That's one small step for a man, one giant leap for mankind.",
        author: "Neil Armstrong"
    },
    {
        quote: "In this single galaxy of ours there are eighty-seven thousand million suns.",
        author: "Arthur C. Clarke"
    },
    {
        quote: "I see Earth! It is so beautiful.",
        author: "Yuri Gagarin"
    },
    {
        quote: "It is a fixer upper of a planet but we could make it work.",
        author: "Elon Musk"
    },
    {
        quote: "Across the sea of space, the stars are other suns.",
        author: "Carl Sagan"
    },
    {
        quote: "The history of astronomy is a history of receding horizons.",
        author: "Edwin Powell Hubble"
    },
    {
        quote: "She had always loved the stars.",
        author: "Sasha Alsberg"
    },
    {
        quote: "I'm convinced that before the year 2000 is over, the first child will have been born on the moon.",
        author: "Wernher Von Braun"
    },
    {
        quote: "Without space, there is no time.",
        author: "Dejan Stojanovic"
    },
    {
        quote: "We are finite, in that we are a product and source of the infinite.",
        author: "Ilyas Kassam"
    },
    {
        quote: "We are limited only by our imagination and our will to act.",
        author: "Ron Garan"
    },
    {
        quote: "Love is the one thing that transcends time and space.",
        author: "Matthew McConaughey"
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
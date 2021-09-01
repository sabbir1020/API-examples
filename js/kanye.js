// const loadQuotes= () =>{
//     fetch('https://api.kanye.rest')
//     .then(res => res.json())
//     .then(data => displayQuote(data))
// };

// const displayQuote = Quote => {
//     const QuoteElement = document.getElementById('quote')
//     QuoteElement.innerText = Quote.quote;
// } 





//    const  loadQuotes=()=>{
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayQuote(data))
// };

//   const displayQuote = Quote =>{
//       console.log(Quote);
//     const QuoteElement= document.getElementById('quote')
//     QuoteElement.innerText = Quote.quote;

// }






 const loadQuotes = () =>{
     fetch('https://api.kanye.rest/')
     .then(res => res.json())
     .then(data => displayQuote(data))
 }
 const displayQuote = (quotes) =>{
     const QuoteElement = document.getElementById('quote')
     console.log(quotes)
    QuoteElement.innerText = quotes.quote;
 }
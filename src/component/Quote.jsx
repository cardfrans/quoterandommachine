import React from 'react'
import { useState, useEffect } from "react";
import "./Quote.css";

const Quote = () => {
   const [quoteInfo, setQuoteInfo] = useState({});

   useEffect(() => {
     getQuote();
   }, []);

   const getQuote = () => {
     fetch("https://api.quotable.io/random")
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         setQuoteInfo({
           content: data.content,
           author: data.author,
         });
       });
   };

   return (
     <div className="App">
       <div id="quote-box">
         <p id="text">{quoteInfo.content}</p>
         <p id="author">{quoteInfo.author}</p>
         <div className='social-media'>
         <button  id="new-quote" onClick={getQuote}>
           New Quote
         </button>
         <a id='tweet-quote'
           href={
             "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" +
             quoteInfo.content
           }
           target="_blank"
         >
           Post to twitter
         </a>
         </div>
       </div>
     </div>
   );
}

export default Quote
import React, { useState, useEffect } from "react";
import "../styles/Quotes.css";

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote();
    }, 24 * 60 * 60 * 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function getQuote() {
    fetch("https://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
  }
  return (
    <div className="quote">
      <strong className="quoteText">{quote}</strong>
      <span className="quoteAuthor"> - {author}</span>
    </div>
  );
}
export default Quotes;

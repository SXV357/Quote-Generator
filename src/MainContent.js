import React from "react"
import QuotesData from "./QuotesData"

export default function MainContent(){

    const [quotes, setQuotes] = React.useState();

    function getQuote(){
      let quoteArray = QuotesData.quotes;
      let index = Math.floor(Math.random() * quoteArray.length);
      setQuotes(quoteArray[index].quote);
    }
    return(
        <div className = "quote-container">
            <div className = "quote-box">
                <p className = "quote">❝{quotes}❞</p>
            </div>
            <button className = "quote-generator-button" onClick = {getQuote}>Generate a Quote</button>
        </div>
    )
}
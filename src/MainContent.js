import React from "react"
import QuotesData from "./QuotesData"

export default function MainContent(){

    const [quotes, setQuotes] = React.useState('Hmmm.... Don\'t see a quote? Generate one now by clicking the button below!');

    function getQuote(){
      let array = QuotesData  
      let index = Math.floor(Math.random() * array.length);
      return setQuotes(`"${array[index].quote}"` + ' - ' + array[index].name);
    }
    return(
        <div className = "quote-container">
            <div className = "quote-box">
                <p className = "quote">{quotes}</p>
            </div>
            <button className = "quote-generator-button" onClick = {getQuote}>Generate a Quote</button>
        </div>
    )
}
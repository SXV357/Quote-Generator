import React, {useState, useEffect} from "react"

export default function MainContent(){

    const [quote, setQuote] = useState({
        quote: "",
        person: ""
    })

    const [allQuotes, setAllQuotes] = useState("")

    function getRandomQuote(){
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setAllQuotes(data))
        let quoteObj = allQuotes
        return setQuote(prevQuote => {
            return{
                ...prevQuote,
                quote: quoteObj.content,
                person: quoteObj.author
            }
        })
    }

    return(
        <div className = "quote-container">
            <div className = "quote-box">
                <p className = "quote">{quote.quote + " - " + quote.person}</p>
            </div>
            <button className = "quote-generator-button" onClick = {getRandomQuote}>Generate a Quote</button>
        </div>
    )
}
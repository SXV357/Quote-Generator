import React, {useState, useEffect} from "react"

export default function MainContent(){

    const [quote, setQuote] = useState({
        quote: "",
        person: ""
    })

    const [allQuotes, setAllQuotes] = useState("")

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => setAllQuotes(data))
    }, [])

    function getRandomQuote(){
        let array = allQuotes
        let index = Math.floor(Math.random() * array.length)
        return setQuote(prevQuote => {
            return{
                ...prevQuote,
                quote: array[index].text,
                person: array[index].author
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
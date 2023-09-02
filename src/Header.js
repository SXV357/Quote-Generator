import React from "react"

export default function Header(){
    console.log("Hello World");
    return(
        <div className = "header-container">
            <img className = "header-image" src = "https://th.bing.com/th/id/R.d9a56eb09892cbf6ec98b6f1b4d94dd6?rik=s3tHM8YMNiceWw&pid=ImgRaw&r=0" alt = "Sunset"/>
            <h1 className = "header-title">Quote Generator</h1>
                <p>Your one stop shop for daily inspiration</p>
        </div>
    )
}
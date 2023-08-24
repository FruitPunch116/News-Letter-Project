import { useEffect, useState } from "react"

function Stocks () {

    const [articles, setArticles] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/Articles")
        .then(r => r.json())
        .then(data => setArticles(data))
    },[])
    
    const stocksArticles = articles.filter(article => article.section === "Stocks")

    return (
        <div className="stocks-market">
            <h1>Stocks Market</h1>
            <br />
            <div className="stocks" articles={articles}>
                {stocksArticles.map(article => <p>{article.body}</p>)}
            </div>
        </div>
        
    )
}

export default Stocks
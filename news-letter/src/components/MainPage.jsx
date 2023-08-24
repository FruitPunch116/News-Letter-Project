import { useEffect, useState } from "react"
import ArticleList from "./ArticlesList"

function MainPage () {

    const [articlesObj, setArticlesObj] = useState([])

    console.log(articlesObj)

    useEffect(()=>{
        fetch('http://localhost:3000/Articles')
        .then(resp => resp.json())
        .then(data => setArticlesObj(data))
    },[])

    // const filteredArticles = articlesObj.filter(articleObj => )

    return (
        <div className="main-page">
            <div>
                <ArticleList articlesObj={articlesObj} setArticlesObj={setArticlesObj} />
            </div>
        </div>
        
    )
}

export default MainPage
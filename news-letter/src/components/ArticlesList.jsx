import Article from "./Article"

function ArticleList ({articlesObj}) {

    const mappedArticles = articlesObj.map(articleObj => {
        return <Article key={articleObj.id} owner={articleObj.owner} date={articleObj.date} likes={articleObj.likes} section={articleObj.section} body={articleObj.body} title={articleObj.title} />
    })

    return (
        <div className="article-list">
            {mappedArticles}
        </div>
    )
}

export default ArticleList
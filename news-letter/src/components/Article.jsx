
function Article ({owner, title, date, body, likes, section}) {

    return (
        <div className="article-card">
            <h1>{title}</h1>
            <br />
            <h3>{body}</h3>
            <h5>Author: {owner}</h5>
            <h5>Likes: {likes} </h5>
            <h5>Date of post: {date} </h5>
            <h5>Section: {section} </h5>
        </div>
    )
}

export default Article 
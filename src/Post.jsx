import './Post.css'
export default function Post ({post}) {
    console.log(post)

    const {userId, id, body, title} = post

    return (
        <div className="box">
            <h3>userId: {userId}</h3>
            <h3>title: {title}</h3>
            <p><small>id: {id}</small></p>
            <p>body: {body}</p>
        </div>
    )
}
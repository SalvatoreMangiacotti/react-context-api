// import { Link } from "react-router-dom";

export default function PostCard(props) {

    const post = props.post;

    return (

        <>

            <li className="postCard">

                <img src={post.image} />

                <h2>{post.title}</h2>

                <p>{post.content}</p>

            </li>

        </>

    )

}
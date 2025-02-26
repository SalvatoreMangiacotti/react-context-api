// import { Link } from "react-router-dom";

export default function PostCard(props) {

    const { post } = props;

    return (

        <>

            <li className="post_card">

                <img src={post.image} />

                <h2>{post.title}</h2>

                <p>{post.content}</p>

            </li>

        </>

    )

}
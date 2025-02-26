// UseContext

import { useContext } from "react";

import GlobalContext from "../contexts/GlobalContext";

// PostCard

import PostCard from "./PostCard";

export default function PostsList() {

    const { postsList } = useContext(GlobalContext)

    return (

        <>

            <ul>

                {

                    postsList.map((post) => (

                        <PostCard key={post.id} post={post} />

                    )

                    )}

            </ul>

        </>

    )

}
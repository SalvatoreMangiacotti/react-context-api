// Hook useState

import { useState, useEffect } from "react";

// Axios

import axios from "axios";


export default function PostsList() {

    const [postsList, setPostsList] = useState([]);

    function fetchPosts() {

        axios.get('http://localhost:3000/route')

            .then(function (response) {

                // handle success

                setPostsList(response.data)

                console.log(response.data)

            })

            .catch(function (error) {

                // handle error

                console.log(error);

            })

    }


    useEffect(fetchPosts, [])


    return (

        <>

            <ul>

                {

                    postsList.map((post) =>

                        <li key={post.id}>

                            <img src={post.image} />

                            <h2>{post.title}</h2>

                            <p>{post.content}</p>

                        </li>

                    )}

            </ul>

        </>

    )

}
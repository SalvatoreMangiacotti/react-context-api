// Hooks

import { useState, useEffect } from 'react'

// Axios

import axios from 'axios'

// Browser Router

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Default Layout

import DefaultLayout from './layouts/DefaultLayout'

// Global Context

import GlobalContext from './contexts/GlobalContext'

// PostsPage

import PostsPage from './pages/PostsPage'

// AboutUs Page

import AboutUsPage from './pages/AboutUsPage'

// Css

import './App.css'



function App() {

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

    <GlobalContext.Provider value={{ postsList }}>

      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>

            <Route path='/' element={<PostsPage />} />

            <Route path='/about' element={<AboutUsPage />} />

          </Route>

        </Routes>

      </BrowserRouter >

    </GlobalContext.Provider>

  )

}

export default App
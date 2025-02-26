// Browser Router

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Default Layout

import DefaultLayout from './layouts/DefaultLayout'

// PostsPage

import PostsPage from './pages/PostsPage'

// Css

import './App.css'


function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<PostsPage />} />

        </Routes>

      </BrowserRouter >

    </>

  )

}

export default App
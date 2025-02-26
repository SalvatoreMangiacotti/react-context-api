// Browser Router

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Default Layout

import DefaultLayout from './layouts/DefaultLayout'

// PostsPage

import PostsPage from './pages/PostsPage'

// AboutUs Page

import AboutUsPage from './pages/AboutUsPage'

// Css

import './App.css'



function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>

            <Route path='/' element={<PostsPage />} />

            <Route path='/about' element={<AboutUsPage />} />

          </Route>

        </Routes>

      </BrowserRouter >

    </>

  )

}

export default App
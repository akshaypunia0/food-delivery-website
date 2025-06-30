import { useState } from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
      <div>
        <Home />
        <ToastContainer autoClose={1000}/>
      </div>
  )
}

export default App

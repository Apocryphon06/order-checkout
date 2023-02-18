import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './components/pages/Checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Checkout/>}/>
    </Routes>
    )
}

export default App
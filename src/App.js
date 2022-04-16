import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'

import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </>
  )
}

export default App

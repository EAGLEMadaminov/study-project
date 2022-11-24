import './App.css'
import NumberChose from './components/numberChose'
import Comparison from './components/Comparison/Comparison'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NumberChose />} />

        <Route path='/image' element={<Comparison />} />
      </Routes>
    </div>
  )
}

export default App

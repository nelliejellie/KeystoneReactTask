import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import Products from './pages/Products'
import Users from './pages/Users'
import Analysis from './pages/Analysis'
import Reports from './pages/Reports'
import Investments from './pages/Investments'
import Settings from './pages/Settings'
import Transaction from './pages/Transaction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='flex flex-row border border-[#AEB7BE] rounded-md'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/investment' element={<Investments/>}/>
        <Route path='/settings' element={<Settings/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

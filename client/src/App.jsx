
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div className='dark:bg-gray-900 bg-white min-h-screen flex flex-col'>
      <div className='flex-grow mb-20'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App

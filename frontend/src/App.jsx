import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex bg-[#121420] min-h-screen"> 
    <Sidebar/>
    <Dashboard/>

    </div>
  );
}

export default App


import './App.css'
import Navbar from './components/Navbar'
import { TodosProvider } from './context/TodosContext'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <TodosProvider>
     <Router>
      <div className='container mx-auto p-4'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
      </Router>
    </TodosProvider>
    </>
  )
}

export default App

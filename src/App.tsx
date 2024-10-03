import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import CatGallery from './pages/CatGallery';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<><HomePage /></>} />
        <Route path='/cats' element={<><CatGallery /></>} />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import CatGallery from './pages/CatGallery';
import DetailedView from './components/common/DetailedView';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<><HomePage /></>} />
        <Route path='/cats' element={<><CatGallery /></>} />
        <Route path='/details/:id' element={<><DetailedView /></>} />
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router'
import Navbar from './Navigation/Navbar'
import Home from './Routes/Home/Home'
import Recipes from './Routes/Recipes/Recipes'
import Stock from './Routes/Stock/Stock'
import Brewings from './Routes/Brewings/Brewings'
import Shop from './Routes/Shop/Shop'

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='stock' element={<Stock />} />
        <Route path='brewings' element={<Brewings />} />
        <Route path='recipes/*' element={<Recipes />} />
      </Routes>
    </div>
  )
}

export default App

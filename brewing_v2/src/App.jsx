import { Route, Routes } from 'react-router'
import Navbar from './Navigation/Navbar'
import Home from './Routes/Home/Home'
import Recipes from './Routes/Recipes/Recipes'
import Stock from './Routes/Stock/Stock'
import Brewings from './Routes/Brewings/Brewings'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='recipes/*' element={<Recipes />} />
        <Route path='stock' element={<Stock />} />
        <Route path='brewings' element={<Brewings />} />
      </Routes>
    </div>
  )
}

export default App

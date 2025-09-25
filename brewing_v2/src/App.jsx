import { Route, Routes } from 'react-router'
import Navbar from './Navigation/Navbar'
import Home from './Routes/Home/Home'
import Recipes from './Routes/Recipes/Recipes'
import Stock from './Routes/Stock/Stock'
import Brewings from './Routes/Brewings/Brewings'
import Shop from './Routes/Shop/Shop'
import { useLoadBeers } from './hooks/useLoadBeers'
import Cart from './Routes/Cart/Cart'
import { useLoadBrewings } from './hooks/useLoadBrewings'
import Footer from './Footer/Footer'
import Admin from './Routes/Admin/Admin'
import { useLoadReviews } from './hooks/useLoadReviews'

function App() {

  useLoadBeers()
  useLoadBrewings()
  useLoadReviews()

  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='beers/*' element={<Shop />} />
        <Route path='stock' element={<Stock />} />
        <Route path='brewings/*' element={<Brewings />} />
        <Route path='recipes/*' element={<Recipes />} />
        <Route path='cart' element={<Cart />} />
        <Route path='admin-dashboard-6666' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

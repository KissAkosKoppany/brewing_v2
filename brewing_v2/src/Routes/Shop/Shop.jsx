
import './Shop.style.css'

import { Routes, Route} from 'react-router'
import ShopItemPage from './Components/ShopItemPage'
import ShopMain from './Components/ShopMain'

const Shop = () => {


  return (
    <div className='shop-container'>
        <Routes>
          <Route index element={<ShopMain />} />
          <Route path=':id' element={<ShopItemPage />} />
        </Routes>
    </div>
  )
}

export default Shop
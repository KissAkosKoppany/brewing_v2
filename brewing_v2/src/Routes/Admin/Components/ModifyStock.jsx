import React, { useCallback } from 'react'
import { httpModifyStock } from '../../../hooks/requests'

const ModifyStock = () => {

    const handleSubmit = useCallback(() => async(e) => {
        e.preventDefault()

        const newBeer = {
            name: e.target.beer_name.value,
            stock: e.target.new_stock.value
        }

        e.target.reset()
        await httpModifyStock(newBeer)
    }, [httpModifyStock])

  return (
    <div className='admin-stock'>
        <form onSubmit={handleSubmit()}>
            <p>Beer name</p>
            <select name='beer_name' id='beer_name'>
                <option value="Hop Samurai">Hop Samurai</option>
                <option value="Black Shōgun">Black Shōgun</option>
                <option value="Yabai Yakuza">Yabai Yakuza</option>
                <option value="Sumo Stout">Sumo Stout</option>
                <option value="Ronin Weizen">Ronin Weizen</option>
            </select>
            <p>New stock</p>
            <input type="number" name="new_stock" id="new_stock" />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ModifyStock
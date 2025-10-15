import React, { useCallback } from 'react'
import { httpAddBeer } from '../../../hooks/requests'

const AddBeer = () => {

    // images split by "," and make array from it then send to database
    const handleSubmit = useCallback(() => async(e) => {
        e.preventDefault()

        const newBeer = {
            name: e.target.name.value,
            description: e.target.description.value,
            alcohol: e.target.alcohol.value,
            color_scheme: e.target.color_scheme.value,
            link: e.target.link.value,
            stock: e.target.stock.value,
            ibu: e.target.ibu.value,
            type: e.target.type.value,
            images: e.target.images.value.split(","),
            litrage: e.target.litrage.value,
            banner_img: e.target.banner_img.value,
        }

        e.target.reset()
        await httpAddBeer(newBeer)
    }, [httpAddBeer])

  return (
    <div className='add-beer'>
        <h2>Add Beer</h2>
        <form onSubmit={handleSubmit()}>
            <p>Name</p>
            <input type="text" id='name' name='name' />
            <p>Description</p>
            <input type="text" id='description' name='description' />
            <p>ABV</p>
            <input type="number" id='alcohol' step='0.01' name='alcohol' />
            <p>Color scheme</p>
            <input type="text" id='color_scheme' name='color_scheme' />
            <p>Link</p>
            <input type="text" id='link' name='link' />
            <p>Stock</p>
            <input type="number" id='stock' name='stock' />
            <p>IBU</p>
            <input type="number" name="ibu" id="ibu" />
            <p>Type</p>
            <input type="text" name="type" id="type" />
            <p>Images</p>
            <input type="text" name="images" id="images" />
            <p>Litrage</p>
            <input type="number" name="litrage" id="litrage" />
            <p>Banner image</p>
            <input type="text" name="banner_img" id="banner_img" />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddBeer
import React, { useCallback } from 'react'
import { httpAddBrewing } from '../../../hooks/requests'

const AddBrewing = () => {

  // const formRef = useRef();  

  const handleSubmit = useCallback(() => async(e) => {
    e.preventDefault()
    
    const newBrew = {
            // id: e.target.id.value,
            beer_name: e.target.name.value,
            brew_date: e.target.brew_date.value,
            preboil_gr: e.target.pre_gr.value,
            preboil_v: e.target.pre_v.value,
            postbiol_v: e.target.post_v.value,
            original_gr: e.target.og.value,
            water_chemistry: e.target.water_chem.value,
            yeast_type: e.target.yeast.value,
            final_gravity: e.target.fg.value,
            abv: e.target.abv.value,
            cold_hop_date: e.target.cold_hop_date.value,
            cold_hop_length: e.target.cold_hop_dur.value,
            bottling_date: e.target.bottling_date.value,
            bottles_filled: e.target.bottles_filled.value,
            sugar_per_bottle: e.target.sugar_bottle.value,
    }

    e.target.reset()
    await httpAddBrewing(newBrew)
  }, [httpAddBrewing])

  return (
    <div className='brewing-item'>
      <h1>Add Brew</h1>

      <form onSubmit={handleSubmit()}>
        <div className='brewing-item-group'>
          <div className='brewing-item-info'>
            <label htmlFor="name"><p>Beer name:</p></label>
            <input id='name' name='name' type='text' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="brew_date"><p>Brew date:</p></label>
            <input type='date' id='brew_date' name='brew_date' />
          </div>
          {/* <div className='brewing-item-info'>
            <label htmlFor="id"><p>ID:</p></label>
            <input type='number' id='id' name='id' required />
          </div> */}
        </div>
        
        <div className='brewing-item-group'>
          <div className='brewing-item-info'>
            <label htmlFor="water_chem"><p>Water chemistry:</p></label>
            <input type='text' id='water_chem' name='water_chem' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="pre_gr"><p>Preboil gravity:</p></label>
            <input type='number' id='pre_gr' name='pre_gr' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="pre_v"><p>Prebiol volume:</p></label>
            <input type='number' id='pre_v' name='pre_v' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="post_v"><p>Postboil volume:</p></label>
            <input type='number' id='post_v' name='post_v' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="og"><p>Original Gravity:</p></label>
            <input type='number' id='og' name='og' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="yeast"><p>Yeast type:</p></label>
            <input type='text' id='yeast' name='yeast' />
          </div>
        </div>

        <div className='brewing-item-group'>
          <div className='brewing-item-info'>
            <label htmlFor="fg"><p>Final Gravity:</p></label>
            <input type='number' id='fg' name='fg' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="cold_hop_date"><p>Cold hop date:</p></label>
            <input type='date' id='cold_hop_date' name='cold_hop_date' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="cold_hop_dur"><p>Cold hop duration:</p></label>
            <input type='number' id='cold_hop_dur' name='cold_hop_dur' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="abv"><p>ABV:</p></label>
            <input type='number' id='abv' name='abv' />
          </div>
        </div>

        <div className='brewing-item-group'>
          <div className='brewing-item-info'>
            <label htmlFor="bottling_date"><p>Bottling date:</p></label>
            <input type='date' id='bottling_date' name='bottling_date' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="bottles_filled"><p>Bottles filled:</p></label>
            <input type='number' id='bottles_filled' name='bottles_filled' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="sugar_bottle"><p>Sugar per bottle:</p></label>
            <input type='number' id='sugar_bottle' name='sugar_bottle' />
          </div>
        </div>

        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default AddBrewing
import React from 'react'

const AddBrewing = ({ brewings }) => {

  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let newBrew = {
      info: {
            id: e.target.id.value,
            beer_name: e.target.name.value,
            brew_date: e.target.brew_date.value,
        },
        brewing: {
            preboil_gr: e.target.pre_gr.value,
            preboil_v: e.target.pre_v.value,
            postbiol_v: e.target.post_v.value,
            original_gr: e.target.og.value,
            water_ph: e.target.water_ph.value,
            water_chemistry: e.target.water_chem.value,
            aeration_type: e.target.aeration_type.value,
            aeration_duration: e.target.aeration_dur.value,
            pitching_method: e.target.pitch_method.value,
            yeast_type: e.target.yeast.value,
        },
        fermentation: {
            gravity_4_days: e.target.gr_4.value,
            gravity_6_days: e.target.gr_6.value,
            final_gravity: e.target.fg.value,
            temp: e.target.temp.value,
            worth_ph: e.target.wort_ph.value,
            abv: e.target.abv.value,
            cold_hop_date: e.target.cold_hop_date.value,
            cold_hop_length: e.target.cold_hop_dur.value,
        },
        bottling: {
            bottling_date: e.target.bottling_date.value,
            bottles_filled: e.target.bottles_filled.value,
            sugar_per_bottle: e.target.sugar_bottle.value,
        }
    }

    brewings.push(newBrew)
    // save it to local and then get it from local to reducer and load to brewinglist brewings.push(obj from local)

  }

  console.log("add brewing", brewings)

  return (
    <div className='brewing-item'>
      <h1>Add Brew</h1>

      <form onSubmit={handleSubmit}>
        <div className='brewing-item-group'>
          <div className='brewing-item-info'>
            <label htmlFor="name"><p>Beer name:</p></label>
            <input id='name' name='name' type='text' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="brew_date"><p>Brew date:</p></label>
            <input type='date' id='brew_date' name='brew_date' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="id"><p>ID:</p></label>
            <input type='number' id='id' name='id' required />
          </div>
        </div>
        
        <div className='brewing-item-group'>
          <div className='brewing-item-info'>
            <label htmlFor="water_ph"><p>Water PH:</p></label>
            <input type='number' id='water_ph' name='water_ph' />
          </div>
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
            <label htmlFor="pitch_method"><p>Pitching method:</p></label>
            <input type='text' id='pitch_method' name='pitch_method' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="yeast"><p>Yeast type:</p></label>
            <input type='text' id='yeast' name='yeast' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="aeration_type"><p>Aeration type:</p></label>
            <input type='text' id='aeration_type' name='aeration_type' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="aeration_dur"><p>Aeration duration:</p></label>
            <input type='number' id='aeration_dur' name='aeration_dur' />
          </div>
        </div>

        <div className='brewing-item-group'>
          <div className='brewing-item-info'>
            <label htmlFor="gr_4"><p>Gravity 4 days:</p></label>
            <input type='number' id='gr_4' name='gr_4' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="gr_6"><p>Gravity 6 days:</p></label>
            <input type='number' id='gr_6' name='gr_6' />
          </div>
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
            <label htmlFor="temp"><p>Temperature:</p></label>
            <input type='number' id='temp' name='temp' />
          </div>
          <div className='brewing-item-info'>
            <label htmlFor="wort_ph"><p>Wort PH:</p></label>
            <input type='number' id='wort_ph' name='wort_ph' />
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
            <input type='text' id='bottles_filled' name='bottles_filled' />
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
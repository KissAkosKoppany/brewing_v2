import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

const HomeVoteModal = () => {
  return (
    <div className='home-vote-modal'>
        <form className='vote-form' action="">
            <div className='vote-close-button'>
                <IoIosCloseCircle />
            </div>
            <h1>Select your prefered beer style</h1>
            <select name='beer_style' id='beer_style' defaultValue="" required>
                <option value="" disabled>
                    Choose a beer style...
                </option>
                <option value="ipa">India Pale Ale</option>
                <option value="milk-stout">Milk Stout</option>
                <option value="american-whit">American Whit</option>
                <option value="coconut-ipa">Coconut IPA</option>
                <option value="dunkel-weizen">Dunkel Weizen</option>
            </select>
            <input type="email" name='email' id='email' placeholder='E-mail adress...' />
            <button type='submit'>Send</button>
            <p>*every vote is anonymous</p>
            <p>*you can only vote once every session</p>
            <p>*a new vote session starts whenever a new Pandora's box version comes out</p>
        </form>
    </div>
  )
}

export default HomeVoteModal
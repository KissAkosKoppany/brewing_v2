import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import BeerStyleSelect from './BeerStyleSelect';
import EmailInput from './EmailInput';

const HomeVoteModal = ({ handleModal }) => {
  return (
    <div className='home-vote-modal'>
        <div onClick={() => handleModal(false)} className="modal-overlay"></div>
        <form className='vote-form' action="">
            <div onClick={() => handleModal(false)} className='vote-close-button'>
                <IoIosCloseCircle />
            </div>
            <h1>Select your prefered beer style</h1>
           
            <BeerStyleSelect />
            
            <EmailInput />
            <button type='submit'>Submit</button>
            <p>every vote is anonymous*</p>
            <p>you can only vote once every session*</p>
            <p>a new vote session starts whenever a new Pandora's box version comes out*</p>
        </form>
    </div>
  )
}

export default HomeVoteModal
import React, { useCallback, useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import BeerStyleSelect from './BeerStyleSelect';
import EmailInput from './EmailInput';

const HomeVoteModal = ({ handleModal }) => {

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(() => async(e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);

    const payload = {
      email: formData.get("email"),
      beer_style: formData.get("beer_style"),
    };

    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/votes", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setMessage(result.message);
      // Don't count the vote here.
      // The backend counts it only after email confirmation.
    } catch (error) {
      setMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <div className='home-vote-modal'>
        <div onClick={() => handleModal(false)} className="modal-overlay"></div>
        <form className='vote-form' onSubmit={handleSubmit()}>
            <div onClick={() => handleModal(false)} className='vote-close-button'>
                <IoIosCloseCircle />
            </div>
            <h1>Select your prefered beer style</h1>
           
            <BeerStyleSelect />
            
            <EmailInput />
            <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
            {message && <p className='vote-status-message' role="status">{message}</p>}
            <p>every vote is anonymous*</p>
            <p>you can only vote once every session*</p>
            <p>a new vote session starts whenever a new Pandora's box version comes out*</p>
        </form>
    </div>
  )
}

export default HomeVoteModal
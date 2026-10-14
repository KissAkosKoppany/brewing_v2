import React, { useState } from 'react'
import HomeVoteModal from './HomeVoteModal'

const HomeExperiment = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleModal = (bool) => {
        setIsOpen(bool)
    }

  return (
    <div className='home-experiment'>
        {
            isOpen ?
            <HomeVoteModal handleModal={handleModal} />
            :
            null
        }
        <h2>THE EXPERIMENT</h2>
        <h3>PANDORA'S BOX</h3>
        <div className='experiment-description'>
            <p>Curiosity has its own flavor.</p>
            <p>Pandora's Box is our special edition where every batch brings a new recipe and a new flavor. From bold ideas to unexpected combinations, you never know what comes next.</p>
            <p>And the best part? You get to be part of the experiment. Cast your vote and help decide what we brew next. You never know what we'll unleash when Pandora's Box opens again.</p>
            <button onClick={() => handleModal(true)}>Vote for next batch</button>
        </div>
        <h3>CURRENT EDITION</h3>
        <div className='experiment-table'>
            <h4>Name of the beer</h4>
            <div className='experiment-table-image'>
                <img src="images/experiment.jpeg" alt="experiment" />
            </div>
            <h5>American whit</h5>
            <p>Description of the beer, it will be short and punchy.</p>
            <div className="experiment-table-info">
                <div className='experiment-table-info-box'>
                    <div className='info-box'>
                        <p>ALCOHOL</p>
                        <p>5%</p>
                        <p>ABV</p>
                    </div>
                    <div className='info-box'>
                        <p>COLOR</p>
                        <p>Hazy Gold</p>
                    </div>
                </div>
                <div className='experiment-table-info-box'>
                    <div className='info-box'>
                        <p>BITTERNESS</p>
                        <p>21</p>
                        <p>IBU</p>
                    </div>
                    <div className='info-box'>
                        <p>BODY</p>
                        <p>Medium</p>
                    </div>
                </div>
            </div>
            <h5>The falvor</h5>
            <div className="experiment-table-flavor">
                {/* array of string */}
                <p>Citrus</p>
                <p>Herbal</p>
                <p>Juicy</p>
            </div>
        </div>
    </div>
  )
}

export default HomeExperiment
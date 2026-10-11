import React from 'react'

const HomeExperiment = () => {
  return (
    <div className='home-experiment'>
        <h2>THE EXPERIMENT</h2>
        <h3>PANDORA'S BOX</h3>
        <div className='experiment-description'>
            <p>Curiosity has its own flavor.</p>
            <p>Pandora's Box is our special edition where every batch brings a new recipe and a new flavor. From bold ideas to unexpected combinations, you never know what comes next.</p>
            <p>And the best part? You get to be part of the experiment. Cast your vote and help decide what we brew next. You never know what we'll unleash when Pandora's Box opens again.</p>
            <button>Vote for next batch</button>
        </div>
        <h3>CURRENT EDITION</h3>
        <div className='experiment-table'>
            <div className='experiment-table-pair'>
                <p>Type</p>
                <p></p>
            </div>
            <div className='experiment-table-pair'>
                <p>ABV</p>
                <p>5%</p>
            </div>
            <div className='experiment-table-pair'>
                <p>IBU</p>
                <p>21</p>
            </div>
        </div>
    </div>
  )
}

export default HomeExperiment
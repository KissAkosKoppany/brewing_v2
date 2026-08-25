import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const HomeBeers = () => {

    const beers = useSelector(state => state.rootReducer.beer.allBeers) || []
    
    const [middleIndex, setMiddleIndex] = useState(1);

    const getCard = (offset) => {
        if(beers) {
            return beers[
                (middleIndex + offset + beers?.length) % beers?.length
            ];
        }
    };

    const visibleCards = [
        getCard(-1),
        getCard(0),
        getCard(1),
    ];

    const handleCardClick = (cardId) => {
        const clickedIndex = beers?.findIndex(
            (card) => card?.id === cardId
        );

        if (clickedIndex === -1) return;

        // Only allow clicking the visible side cards
        const leftIndex =
        (middleIndex - 1 + beers?.length) % beers?.length;

        const rightIndex =
        (middleIndex + 1) % beers?.length;

        if (clickedIndex === leftIndex || clickedIndex === rightIndex) {
            setMiddleIndex(clickedIndex);
        }
    };

    if(!beers?.length) {
        return <div>Loading...</div>
    }

  return (
    <div className='home-spellbook'>
        <h1>The spellbook</h1>
        <div className="spellbook-container">
            <div className="carousel">
                {visibleCards?.map((card, index) => {
                    const isMiddle = index === 1;
                    return (
                        <div
                            key={card?.id}
                            className={`card ${isMiddle ? "card--active" : ""} ${card.color_scheme}`}
                            onClick={() => handleCardClick(card?.id)}
                        >
                            <div className='card-bg'></div>
                            <div className="card-image">
                                <img src={card?.images[0]} alt="beer label" />
                            </div>
                            <p>{card?.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default HomeBeers
import React from 'react'
import { Link } from 'react-router'

const BrewingsListComponent = ({ brewings }) => {
  return (
    <>
        <div className='brewing-list-item first'>
            <div className='group'>
                <p>Nr.</p>
                <p>Beer name</p>
            </div>
            <p>Brew date</p>
        </div>
        {
            brewings.map((brewing, i) => {
                return (
                    <div key={brewing.id} className='brewing-list-item'>
                        <div className='group'>
                            <p>{i+1}.</p>
                            <p>
                                <Link className='link' to={`/brewings/brewings-list/${brewing.id}`}>
                                    {brewing.beer_name}
                                </Link>
                            </p>
                        </div>
                        <p>{brewing.brew_date.split('T')[0]}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default BrewingsListComponent
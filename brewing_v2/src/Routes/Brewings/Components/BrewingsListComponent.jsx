import React from 'react'
import { Link } from 'react-router'

const BrewingsListComponent = ({ brewings }) => {
  return (
    <>
        <div className='brewing-list-item'>
            <div className='group'>
                <p>ID</p>
                <p>Beer name</p>
            </div>
            <p>Brew date</p>
        </div>
        {
            brewings.map(brewing => {
                return (
                    <div key={brewing.id} className='brewing-list-item'>
                        <div className='group'>
                            <p>{brewing.id}</p>
                            <p>
                                <Link className='link' to={`/brewings/brewings-list/${brewing.id}`}>
                                    {brewing.beer_name}
                                </Link>
                            </p>
                        </div>
                        <p>{brewing.brew_date}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default BrewingsListComponent
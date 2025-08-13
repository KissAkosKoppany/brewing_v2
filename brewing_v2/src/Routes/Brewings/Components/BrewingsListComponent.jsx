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
                    <div key={brewing.info.id} className='brewing-list-item'>
                        <div className='group'>
                            <p>{brewing.info.id}</p>
                            <p>
                                <Link className='link' to={`/brewings/brewings-list/${brewing.info.id}`}>
                                    {brewing.info.beer_name}
                                </Link>
                            </p>
                        </div>
                        <p>{brewing.info.brew_date}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default BrewingsListComponent
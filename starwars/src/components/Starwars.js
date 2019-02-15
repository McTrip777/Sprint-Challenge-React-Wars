import React from 'react'
import StarWarsChar from './StarWarsChar'

const StarWars = props => {
    return (
      <div className='allCards'>
        {props.character.map((char, index) => (
            <StarWarsChar key={index} character={char} />
            ))}
      </div>
    )
}

export default StarWars;

import React from 'react'
import StarWars from './StarWars';


const StarWarsChar = props => {
    return (
      <div>
        {props.starwarsChars.map((starwarsChar, index) => (
        <StarWars key={index} starwarsChars={starwarsChar} />
        ))}
      </div>
    )
  }


export default StarWarsChar

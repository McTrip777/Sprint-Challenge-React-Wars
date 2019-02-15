import React from 'react'
import './StarWars.css'


const StarWarsChar = props => {
    return (
          <div className='card'>
            <h2>{ props.character.name }</h2>
            <p><strong>DOB:</strong> { props.character.birth_year }</p>
            <p><strong>Height:</strong> { props.character.height }</p>
            <p><strong>Mass:</strong> { props.character.mass }</p>
            <p><strong>Hair Color:</strong> { props.character.hair_color }</p>
            <p><strong>Skin Color:</strong> { props.character.skin_color }</p>
            <p><strong>Eye Color:</strong> { props.character.eye_color }</p>
            <p><strong>Gender:</strong> { props.character.gender }</p>
          </div>
    )

}

export default StarWarsChar;

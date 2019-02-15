import React from 'react'

const StarWarsChar = props => {
    return (
        <div>
            <h2><strong>Name:</strong> { props.character.name }</h2>
            <p><strong>DOB:</strong> { props.character.birth_year }</p>
            <p><strong>Height:</strong> { props.character.height }</p>
            <p><strong>Mass:</strong> { props.character.mass }</p>
            <p><strong>Hair Color:</strong> { props.character.hair_color }</p>
            <p><strong>Skin Color:</strong> { props.character.skin_color }</p>
            <p><strong>Eye Color:</strong> { props.character.eye_color }</p>
            <p><strong>Gender:</strong> { props.character.gender }</p>
            <p><a href='{ props.character.homeworld }'><strong>Home World</strong></a></p>
            <p><a href='{ props.character.species }'><strong>Species</strong></a></p>
        </div>
    )

}

export default StarWarsChar;

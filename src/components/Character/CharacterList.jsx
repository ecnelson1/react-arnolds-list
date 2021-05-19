import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'

function CharacterList({ characters }) {
    return (
        <ul aria-label= 'characters'>
            {characters.map((character) => (
                <li key={character.id}>
                    <Character
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    />
                </li>
            ))}
            
        </ul>
    )
}

CharacterList.propTypes = {
    character: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    )

}

export default CharacterList

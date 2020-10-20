import React from 'react'
import CharacterItem from './CharacterItem';
import Spinner from '../UI/Spinner';
const CharacterGrids = (props) => {
    return props.isLoading?(<Spinner></Spinner>):(<section className="cards">
            {props.items.map((item)=>(
                //renderujemo jsx i zbog toga treba( ), kod logike treba{}
                <CharacterItem item={item} key={item.char_id}></CharacterItem>
            ))}
        
        </section>
    )
}

export default CharacterGrids

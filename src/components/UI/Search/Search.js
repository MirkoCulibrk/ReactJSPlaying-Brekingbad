import React,{useState} from 'react'

const Search = (props) => {
    const [text,setText]=useState('');
    const onChange=(q)=>{
        setText(q)
        props.getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input type="text" 
                className="form-control" 
                placeholder="Search characters" 
                value={text}
                onChange={(event)=>onChange(event.target.value)}
                ></input>
            </form>
        </section>
    )
}

export default Search

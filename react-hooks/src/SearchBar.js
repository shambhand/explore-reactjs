import React, {useState} from 'react';

function SearchBar() {

    const [query, setQuery] = useState('');

    const handleClick = (event) => {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }

    return(
        <div>
            <input type='text' value={query} onChange={(event)=> {setQuery(event.target.value)}}/>
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchBar;
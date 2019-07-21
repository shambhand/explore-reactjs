import React, {useEffect, useState} from 'react';

function ListCountries(initialState, url) {

    const  [resultObject, setResultObject] = useState([]);

    useEffect(() => {
        fetch('https://api.openaq.org/v1/countries')
        .then((response) => response.json())
        .then(json => setResultObject(json.results))    
    }, []);



    function getCountries() {
        const countries = [];
        resultObject.forEach(element => {
            const {name} = element;
            countries.push(name);
        });
        return countries;            
    }

    return(
        <div>
            {getCountries()}
        </div>
    )
}

export default ListCountries;
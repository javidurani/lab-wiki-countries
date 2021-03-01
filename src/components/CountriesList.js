import countries from '../countries.json'
import React from 'react';

function CountriesList(){
    const [countries, setCountries] = React.useState();

    return(
        <div className = 'list'>
            {countries.map(c => {
                return(
                    <div className = "child">
                        <ul>{c.flag}{c.common}</ul>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;
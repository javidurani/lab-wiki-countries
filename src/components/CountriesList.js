import countries from '../countries.json'
import React from 'react';

function CountriesList(){
    const [country, setCountry] = React.useState();

    return(
        <div className = 'list'>
            {country.map(c => {
                return(
                    <div className = "child">
                        <ul>{c.flag}{c.common}</ul>
                    </div>
                )
            })}; 
        </div>
    );
}

export default CountriesList;
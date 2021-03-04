import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

function CountryDetails(props){
    const country = countries.find(element => element.cca3 == props.match.params.countryCode)

    return(
        <div className = 'parent'>
            <h2>{country.name.common}</h2>
            <p>Area: {country.area} km<sup>2</sup></p>
            <p>Borders:</p>
            <div>
                <ul>
                    {country.borders.map((country) => {
                        <li><Link to {...`/countries/${country}`}><p>{countries.find(element => element.cca3 == country).name.common}</p></Link></li>
                    })}
                </ul>
            </div>
        </div>
    )
    
}

export default CountryDetails;
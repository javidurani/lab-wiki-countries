
import React from "react";
import countries from "../countries.json";
import {Link} from "react-router-dom";
import './Navbar.css';

function CountryList(){
    return(
      <div className = "parent">
          <div className="nav">
                <div>WikiCountries</div>
            </div>
          <div className = "list">
              {countries.map((country, i) => {
                  return(
                      <div className = "text" key = {i}>
                          <Link to {...`/:${country.cca3}`}>{country.flag} {country.name.common}</Link>
                      </div>
                  )
              })}
          </div>
      </div>
    )
}
  


export default CountryList
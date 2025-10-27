import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({coutriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle Visited Country clicked', country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) => {
        console.log('flag need to be added', flag)
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(coutriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>My Visited Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>   
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
                }   
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
// import React, { useEffect, useState } from 'react';
// import Country from '../Country/Country';

// const Countries = () => {

//     const [countries, setCountries] = useState([])

//     useEffect(() => {
//          fetch('https://restcountries.com/v2/all')
//             .then(res => res.json())
//             .then(data => setCountries(data));
//     }, [])

//     return (
//         <div>
//             <h1>My Total Country  : {countries.length}</h1>
//             {
//                 countries.map(country => <Country
//                     country={country}
//                     // name={country.name}
//                     // capital={country.capital}
//                     // population={country.population}
//                     // flag={country.flag}
//                 ></Country>)
//             }
//         </div>
//     );
// };

// export default Countries;

import React, { useEffect, useState } from 'react';
 import Country from '../Country/Country';
 import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data =>setCountries(data));
    
    }, [])
    return (
        <div>
            <h1>My Total Countries : {countries.length}</h1>
            <div className='countries-container'>
            {
                countries.map(country => <Country country={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;
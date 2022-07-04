// import React from 'react';
// import './Country.css'

// const Country = (props) => {
//     const { name, capital, population, flag, region } = props.country;
//     // console.log(props.country);
//     return (
//         <div className='country-design'>
//             <h3>This is : {name}</h3>
//             <h3>Capital is : {capital}</h3>
//             <h3>Population is : {population}</h3>
//             <img src={flag} alt="" />
//             <p><small>Region Is : {region}</small></p>
//         </div>
//     );
// };

// export default Country;

import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, flag, region } = props.country;
    console.log(props.country);
    return (
        <div className='country-design'>
            <h2>This Is : {name}</h2>
            <h3>Capital Is : {capital}</h3>
            <h3>Total Population Is : {population}</h3>
            <img src={flag} alt="" />
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;
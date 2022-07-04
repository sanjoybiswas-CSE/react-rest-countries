import './App.css';
import Countries from './components/countries/Countries';


// import { useState } from 'react';
// import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Countries>  </Countries>
    </div>
  );
}




{/* <Countries></Countries> */ }
// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(data => setCountries(data));
//   }, [])
//   return (
//     <div>
//       <h1>Show all flag</h1>
//       <h3>Found Countries : {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//     <h2>Name : {props.name}</h2>
//     <p>Capital : {props.capital}</p>
//     </div>
//   )
// }
export default App;

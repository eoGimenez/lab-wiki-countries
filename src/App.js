import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
//import countriesJSON from './countries.json';
import CountriesList from './components/CountriesList';
import { useState, useEffect } from 'react';
import CountryDetails from './components/CountryDetails';
import axios from "axios"


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div className="container wx-auto">
        <div className="row">
          <div className="col-5">
            {<CountriesList countries={countries} />}
          </div>
          <div className="col-2">

          </div>
          <div className="col-5">
            <Routes>
              <Route
                path=":countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

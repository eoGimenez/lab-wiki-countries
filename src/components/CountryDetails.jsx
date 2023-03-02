import { useParams } from 'react-router-dom';
import "../App.css"
import { Link } from "react-router-dom"
/* import axios from "axios"
import { useEffect, useState } from 'react'; */

export default function CountryDetails({countries}) { 
    const { countryId } = useParams();
/*     const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
          .then(response => {
            console.log("console de respueta", response.data)
            setCountries(response.data)
          })
          .catch(err => console.log(err))
      }, [])
 */
    const currentCountry = countries.find((country) => country.alpha3Code === countryId);
    let brderOne = countries.filter((name) => currentCountry.borders.includes(name.alpha3Code))
    const brder = [...brderOne]
    //   let brder = countries.find(name => currentCountry.borders === name.alpha3Code)



    return (
        <>
            <div className="cardDet">
                <img src={'https://flagpedia.net/data/flags/icon/72x54/' + currentCountry.alpha2Code.toLowerCase() + '.png'} className="card-img-top" alt="alter" />
                <div className="card-body">
                    <h5 className="card-title">{currentCountry.name.common}</h5>
                </div>
                <ul>
                    {brder.map(country => {
                        return (
                            <li key={country.alpha3Code}><Link to={"/"+country.alpha3Code}>{country.name.common}</Link></li>
                        );
                    })}
                </ul>
            </div>
        </>

    );
}

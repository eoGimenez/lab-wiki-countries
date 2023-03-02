import { Link } from "react-router-dom"

export default function CountriesList({ countries }) {
    //console.log(countries[0].alpha2Code);
    return (
        <div>
            {countries.map((country) => {
                return (
                    <div country={country} key={country.alpha3Code} className="border border-primary ">
                        <Link to={country.alpha3Code}>
                            <img className="mt-3 mb-1  mx-auto"
                                src={'https://flagpedia.net/data/flags/icon/72x54/'+country.alpha2Code.toLowerCase() + ".png"}
                                alt="imagen"
                            />
                            <p className="">{country.name.common}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

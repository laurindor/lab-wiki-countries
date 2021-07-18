import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Data from '../countries.json'



function getCountryNames(cca3Array) {
	const result = cca3Array.map((cca3) => {
		const country = DataTransferItemList.find((countryObj) => countryObj.cca3 === cca3);
		return country;
	});

	return result;
}



export default function CountryDetails(props){

  const { countryId} = props.match.params //Get the cca3 countryId from the URL

	//Find the country in the countries.json file
	const currentCountry = Data.find(
		(country) => country.cca3 === countryId
	);

	//Set the country in the state
	const [country, setCountry] = useState(currentCountry);

	//Use Effect to update the page whenever the url changes
	useEffect(() => {
		setCountry(currentCountry);
	}, [currentCountry]);

  //Destructure the variables from the state
	const { area, borders, name, flag, region, subregion, capital } = country;

	//Get the array of border countries from the array of cca3 in the borders variable
	const borderCountries = getCountryNames(borders);

	return (
		<div className='country-details'>
			<div className='col-12'>
				<div className='coutry-borders'>
					<h1 className='h1'>
						{name.common} {flag}
					</h1>
					<table className='table'>
						<thead></thead>
						<tbody>
							<tr>
								<td>Official name</td>
								<td>{name.official}</td>
							</tr>
							<tr>
								<td>Capital</td>
								<td>{capital[0]}</td>
							</tr>
							<tr>
								<td>Area</td>
								<td>{area}km
									<sup>2</sup>
								</td>
							</tr>
							<tr>
								<td>Region</td>
								<td>{region}</td>
							</tr>
							<tr>
								<td>Subregion</td>
								<td>{subregion}</td>
							</tr>
							<tr>
								<td>Borders</td>
								<td>
									<ul>
										{borderCountries.map((countryObj, i) => {
											return (
												<Link to={`/details/${countryObj.cca3}`} key={i}>
													<p>{countryObj.name.official}</p>
												</Link>
											);
										})}
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}










import React from 'react';
import Data from '../countries.json'



export default function CountryDetails(props){

  const {id} = props.match.params
  const newCountry = Data.find(country => country.cca3 === id)



    return(

        <div class="col-7">
            <h1>{newCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className='capital-title'>Capital</td>
                  <td>{newCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {newCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>











    )









}
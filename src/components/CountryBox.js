import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryBox (props) {

    const{id, name, image} = props


    return(
        <div>
        <Link className="list-group-item list-group-item-action" to={`/details/${id}`}>{image}{name}</Link>
        </div>

    )

}
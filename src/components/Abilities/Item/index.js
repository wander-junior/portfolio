import React, {Fragment} from 'react'

export default function index({name, icon, description}) {
    return (
        <li>
            <img src={icon} alt={`Ícone ${name}`}/>
            <h2>{name}</h2>
            <p>{description}</p>
        </li>
    )
}
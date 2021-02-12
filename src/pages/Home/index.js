import React from 'react'

import Title from "../../components/Title";
import Abilities from "../../components/Abilities";
import Portfolio from "../../components/Portfolio";

export default function index() {
    return (
        <div>
            <Title/>
            <Abilities isExpanded={false}/>
            <Portfolio/>
        </div>
    )
}



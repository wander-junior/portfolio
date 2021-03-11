import React from 'react';

import Portfolio from "../../components/Portfolio";
import PageHeader from "../../components/PageHeader";

export default function index() {
    return (
        <div>
            <PageHeader name="Portfólio" text="Conheça alguns dos meus projetos"/>
            <main>
                <Portfolio isExpanded={true}/>
            </main>
        </div>
    )
}


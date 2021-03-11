import React from 'react';

import Abilities from "../../components/Abilities";
import PageHeader from "../../components/PageHeader";

export default function index() {
    return (
        <div>
            <PageHeader name='Sobre' text='Saiba mais sobre mim'/>
            <main>
                <Abilities isExpanded={true} />
            </main>
        </div>
    )
}



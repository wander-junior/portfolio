import React from 'react';

import Abilities from "../../components/Abilities";
import PageHeader from "../../components/PageHeader";

export default function Sobre() {
    // Scroll to the top of the page after render
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <div>
            <PageHeader name='Sobre' text='Saiba mais sobre mim'/>
            <main>
                <Abilities isExpanded={true} />
            </main>
        </div>
    )
}



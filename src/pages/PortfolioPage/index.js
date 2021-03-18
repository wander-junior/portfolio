import React from 'react';

import Portfolio from "../../components/Portfolio";
import PageHeader from "../../components/PageHeader";

export default function PortfolioPage() {
    // Scroll to the top of the page after render
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <div>
            <PageHeader name="Portfólio" text="Conheça alguns dos meus projetos"/>
            <main>
                <Portfolio isExpanded={true}/>
            </main>
        </div>
    )
}


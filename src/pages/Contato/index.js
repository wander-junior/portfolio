import React from 'react';

import { Container } from '../../styles';
import Form from '../../components/Form';
import PageHeader from "../../components/PageHeader";

import { ContatoWrapper, InfoSubtitle, Info, InfoItem } from './contato-styles';

export default function Contato() {
    // Scroll to the top of the page after render
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <div>
            <PageHeader name="Contato" text="Tire suas dúvidas comigo" />
            <main>
                <Container>
                    <ContatoWrapper>
                        <Form />
                        <Info>
                            <InfoSubtitle>DADOS</InfoSubtitle>
                            <InfoItem>wanderjrcruz96@gmail.com</InfoItem>
                        </Info>
                    </ContatoWrapper>
                </Container>
            </main>
        </div>
    )
}



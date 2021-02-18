import React from 'react';

import { Container } from '../../styles';
import Form from '../../components/Form';

import { ContatoWrapper, InfoSubtitle, Info, InfoItem } from './contato-styles';

export default function index() {
    return (
        <div>
            <Container>
                <ContatoWrapper>
                    <Form />
                    <Info>
                        <InfoSubtitle>DADOS</InfoSubtitle>
                        <InfoItem>+55 (31) 98888-4231</InfoItem>
                        <InfoItem>wanderjrcruz96@gmail.com</InfoItem>
                    </Info>
                </ContatoWrapper>
            </Container>
        </div>
    )
}



import React from 'react';

import { Container } from '../../styles';
import Form from '../../components/Form';

import { ContatoWrapper } from './contato-styles';

export default function index() {
    return (
        <div>
            <Container>
                <ContatoWrapper>
                    <Form />
                    <div>
                        <h2>DADOS</h2>
                        <p>+55 (31) 98888-4231</p>
                        <p>wanderjrcruz96@gmail.com</p>
                    </div>
                </ContatoWrapper>
            </Container>
        </div>
    )
}



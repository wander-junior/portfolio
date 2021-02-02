import React from 'react'

import frontEndIcon from '../../assets/img/frontend.svg';
import backEndIcon from '../../assets/img/backend.svg';
import uiuxIcon from '../../assets/img/ui.svg';

import { Container } from '../../styles';
import { AbilitiesWrapper, Title, List } from './abilities-styles';

export default function Abilities() {

    return (
        <AbilitiesWrapper>
            <Container>
                <Title>Serviços</Title>
                <List>
                    <li>
                        <img src={frontEndIcon} alt={"Ícone Front End"}/>
                        <h2>Front End</h2>
                        <p>Eu programo a interface gráfica de seu site</p>
                    </li>
                    <li>
                        <img src={backEndIcon} alt={"Ícone Back End"}/>
                        <h2>Back End</h2>
                        <p>Eu implemento aplicações e o banco de dados do seu site</p>
                    </li>
                    <li>
                        <img src={uiuxIcon} alt={"Ícone UI/UX Design"}/>
                        <h2>UI/UX Design</h2>
                        <p>Eu crio interfaces intuitivas e bonitas para o seu site</p>
                    </li>
                </List>
                <button>Saiba mais</button>
            </Container>
        </AbilitiesWrapper>
    )
}

import React from 'react'

import frontEndIcon from '../../assets/img/frontend.svg';
import backEndIcon from '../../assets/img/backend.svg';
import uiuxIcon from '../../assets/img/ui.svg';

import { Container } from '../../styles';
import { AbilitiesWrapper, Title, List } from './abilities-styles';

import Item from './Item';

export default function Abilities() {

    return (
        <AbilitiesWrapper>
            <Container>
                <Title>Serviços</Title>
                <List>
                    <Item 
                        name="Front End" 
                        icon={frontEndIcon} 
                        description="Eu programo a interface gráfica de seu site"
                    />
                    <Item 
                        name="Back End" 
                        icon={backEndIcon} 
                        description="Eu implemento aplicações e o banco de dados do seu site"
                    />    
                    <Item 
                        name="UI/UX Design" 
                        icon={uiuxIcon} 
                        description="Eu crio interfaces intuitivas e bonitas para o seu site"
                    />    
                </List>
                <button>Saiba mais</button>
            </Container>
        </AbilitiesWrapper>
    )
}

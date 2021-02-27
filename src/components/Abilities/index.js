import React from 'react';
import { Link } from 'react-router-dom';

import frontEndIcon from '../../assets/img/frontend.svg';
import backEndIcon from '../../assets/img/backend.svg';
import uiuxIcon from '../../assets/img/ui.svg';
import altFrontEndIcon from '../../assets/img/altFrontend.svg';
import altBackEndIcon from '../../assets/img/altBackend.svg';
import altUiuxIcon from '../../assets/img/altUi.svg';

import { Container, colors } from '../../styles';
import { AbilitiesWrapper, Title, List, AboutDescription } from './abilities-styles';

import Item from './Item';
import Button from '../Button';

export default function Abilities(isExpanded) {

    const frontEndAbilities = ['HTML5/CSS3', 'SASS', 'React'];
    const backEndAbilities = ['Node.js', 'MongoDB', 'Heroku', 'Wordpress'];
    const uiUxAbilities = ['Figma', 'Adobe XD'];

    return (
        <AbilitiesWrapper expanded={isExpanded.isExpanded}>
            <Container>
                { isExpanded.isExpanded ?
                    <AboutDescription>Sou natural de Conselheiro Lafaiete, Minas Gerais e atualmente estudo Ciência da Computação na Universidade Federal de Ouro Preto. Sou apaixonado por tecnologia e vou ajudar você a construir sua presença online com as ferramentas mais atualizadas do mercado.</AboutDescription>
                : null
                }
                <Title expanded={isExpanded.isExpanded}>Serviços</Title>
                <List expanded={isExpanded.isExpanded}>
                    <Item 
                        name="Front End" 
                        icon={frontEndIcon} 
                        altIcon={altFrontEndIcon}
                        description="Eu programo a interface gráfica de seu site"
                        isExpanded={isExpanded}
                        abilitiesList={frontEndAbilities}
                    />
                    <Item 
                        name="Back End" 
                        icon={backEndIcon} 
                        altIcon={altBackEndIcon}
                        description="Eu implemento aplicações e o banco de dados do seu site"
                        isExpanded={isExpanded}
                        abilitiesList={backEndAbilities}
                    />    
                    <Item 
                        name="UI/UX Design" 
                        icon={uiuxIcon} 
                        altIcon={altUiuxIcon}
                        description="Eu crio interfaces intuitivas e bonitas para o seu site"
                        isExpanded={isExpanded}
                        abilitiesList={uiUxAbilities}
                    />    
                </List>
                {!isExpanded.isExpanded ? 
                    <Link to='/sobre'>
                        <Button 
                            text={"Saiba mais"} 
                            mainColor={colors.tertiary} 
                            secondaryColor={colors.primary}
                            hoverColor={colors.secondary}
                        />
                    </Link>
                    : null
                }

            </Container>
        </AbilitiesWrapper>
    )
}

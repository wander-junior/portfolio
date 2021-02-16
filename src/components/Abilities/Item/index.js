import React from 'react'

import { 
        ItemWrapper, 
        Description, 
        Subtitle, 
        Icon,
        AbilitiesListWrapper, 
        AbilitiesSubtitle,
        List,
        ListItem
    } from './item-styles';

export default function index({name, icon, altIcon, description, isExpanded, abilitiesList}) {
    return (
        <ItemWrapper expanded={isExpanded.isExpanded}>
            <Icon src={isExpanded.isExpanded ? altIcon : icon} alt={`Ícone ${name}`}/>
            <Subtitle expanded={isExpanded.isExpanded}>{name}</Subtitle>
            <Description>{description}</Description>
            { isExpanded.isExpanded ? 
                <AbilitiesListWrapper>
                    <AbilitiesSubtitle>Tecnologias usadas</AbilitiesSubtitle>
                    <List>{abilitiesList.map(ability => <ListItem key={ability}>{ability}</ListItem>)}</List>
                </AbilitiesListWrapper>
                : null
            }
        </ItemWrapper>
    )
}
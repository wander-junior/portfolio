import React from 'react'

import { ItemWrapper, Description, Subtitle, Icon } from './item-styles';

export default function index({name, icon, description}) {
    return (
        <ItemWrapper>
            <Icon src={icon} alt={`Ícone ${name}`}/>
            <Subtitle>{name}</Subtitle>
            <Description>{description}</Description>
        </ItemWrapper>
    )
}
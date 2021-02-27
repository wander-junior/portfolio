import React from 'react';
import styled from 'styled-components';

import {typoSizes} from './../../styles';

const StyledButton = styled.button`
    font-size: ${typoSizes.medium};
    background-color: ${props => props.secondaryColor};
    color: ${props => props.mainColor};
    border: 3px solid ${props => props.mainColor};
    border-radius: 9px;
    width: 170px;
    height: 60px;
`;

export default function index({text, mainColor, secondaryColor}) {


    return (
        <StyledButton mainColor={mainColor} secondaryColor={secondaryColor}>
            {text}
        </StyledButton>
    )
}

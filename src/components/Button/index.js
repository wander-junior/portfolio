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
    transition: 0.2s ease-out;

    :hover {
        cursor: pointer;
        color: ${props => props.hoverColor};
        border-color: ${props => props.hoverColor};
    }
`;

export default function index({text, mainColor, secondaryColor, hoverColor}) {


    return (
        <StyledButton mainColor={mainColor} secondaryColor={secondaryColor} hoverColor={hoverColor}>
            {text}
        </StyledButton>
    )
}

import React from 'react';
import styled from 'styled-components';

import {typoSizes} from './../../styles';

export default function index({text, mainColor, secondaryColor}) {

    const StyledButton = styled.button`
        font-size: ${typoSizes.medium};
        background-color: ${secondaryColor};
        color: ${mainColor};
        border: 3px solid ${mainColor};
        border-radius: 9px;
        width: 170px;
        height: 60px;
    `;

    return (
        <StyledButton>
            {text}
        </StyledButton>
    )
}

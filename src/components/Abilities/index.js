import React from 'react'
import frontEndIcon from '../../assets/img/frontend.svg';
import backEndIcon from '../../assets/img/backend.svg';
import uiuxIcon from '../../assets/img/ui.svg';
import styles from '../../styles.js';
import styled from 'styled-components';

export default function Abilities() {
    const AbilitiesWrapper = styled.div`
        background: ${styles.theme.colors.primary};
        color: ${styles.theme.colors.tertiary};
    `;

    return (
        <AbilitiesWrapper>
            <h1>Serviços</h1>
            <ul>
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
            </ul>
            <button>Saiba mais</button>
        </AbilitiesWrapper>
    )
}

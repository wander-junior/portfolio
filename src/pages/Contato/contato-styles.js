import styled from 'styled-components';

import { typoSizes, colors } from '../../styles';

const ContatoWrapper = styled.div`
    min-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; 

    @media (max-width: 1020px) {
        grid-gap: 60px;
    }

    @media (max-width: 770px) {
        grid-template-columns: 1fr;
    }
`;

const Info = styled.address`
    padding-top: 60px;

    @media (max-width: 770px) {
        padding-top: 40px;
    }
`;

const InfoSubtitle = styled.h2`
    font-size: ${typoSizes.medium};
    font-weight: bold;
    color: ${colors.secondary};
    padding-bottom: 20px;

    @media (max-width: 770px) {
        text-align: center;
    }
`;

const InfoItem = styled.p`
    padding-bottom: 10px;
    
    @media (max-width: 770px) {
        text-align: center;
    }
`;

export {ContatoWrapper, InfoSubtitle, Info, InfoItem};
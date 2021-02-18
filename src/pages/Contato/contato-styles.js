import styled from 'styled-components';

import { typoSizes, colors } from '../../styles';

const ContatoWrapper = styled.div`
    min-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; 

    @media (max-width: 770px) {
        grid-template-columns: 1fr;
    }
`;

const InfoSubtitle = styled.h2`
    font-size: ${typoSizes.medium};
    font-weight: bold;
    color: ${colors.secondary};
    padding-bottom: 20px;
`;

const Info = styled.div`
    padding-top: 60px;
`;

const InfoItem = styled.p`
    padding-bottom: 10px;
`;

export {ContatoWrapper, InfoSubtitle, Info, InfoItem};
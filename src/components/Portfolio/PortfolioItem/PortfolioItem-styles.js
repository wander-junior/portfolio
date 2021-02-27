import styled from 'styled-components';
import { colors, typoSizes } from '../../../styles';

const ItemImg = styled.img`
    max-width: 100%;
    :hover {
        cursor: pointer; 
    }

    @media (max-width: 500px) {
        max-width: 90vw;
    }
`;

const Modal = styled.div`
    display: ${props => props.isModalOpen ? 'block' : 'none'};
    position: fixed;
    max-width: 90vw;
    max-height: 90vh;
    top: 50%;
    left: 50%;
    margin-top: -45vh;
    margin-left: -45vw;
    overflow: auto;
    background-color: ${colors.tertiary};
    color: ${colors.quartenary};
    z-index: 2;

    @media (max-width: 700px) {
        width: 460px;
        margin-left: -230px;
    }

    @media (max-width: 500px) {
        width: 90vw;
        margin-left: -45vw;
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px 80px;
    grid-gap: 20px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        padding: 100px 40px;
    }
`;

const ModalImg = styled.img`
    max-width: 490px;
    @media (max-width: 700px) {
        width: 385px;
    }
    @media (max-width: 500px) {
        width: 80vw;
    }
`;

const ModalTitle = styled.h2`
    font-size: ${typoSizes.medium};
    padding-bottom: 20px;
`;

const ModalText = styled.p`
    font-size: ${typoSizes.small};
    line-height: ${typoSizes.smallLineHeight};
    padding-bottom: 20px;
`;

const LinkType = styled.p`
    font-size: ${typoSizes.small};
    font-weight: bold;
    padding-top: 20px;
`;

const ModalLink = styled.a`
    font-size: ${typoSizes.small};
    color: ${colors.primary};
    :hover {
        color: ${colors.secondary};
    }
`;

const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${colors.tertiary};
    border: 3px solid ${colors.quartenary};
    border-radius: 9px;
    color: ${colors.quartenary};
    font-size: ${typoSizes.medium};
    position: absolute;
    left: calc(100% - 60px);
    top: 20px;
    :hover {
        border-color: ${colors.secondary};
        color: ${colors.secondary};
        cursor: pointer;
    }
`;

export {
    ModalBackground,
    ItemImg, 
    Modal, 
    ModalImg, 
    ModalTitle, 
    ModalText, 
    LinkType, 
    ModalLink, 
    ContentWrapper, 
    CloseButton 
};
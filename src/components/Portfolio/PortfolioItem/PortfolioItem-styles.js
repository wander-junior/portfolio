import styled from 'styled-components';
import { colors, typoSizes } from '../../../styles';

const ItemImg = styled.img`
    :hover {
        cursor: pointer; 
    }
`;

const Modal = styled.div`
    display: ${props => props.isModalOpen ? 'block' : 'none'};
    position: fixed;
    width: 1160px;
    height: 720px;
    top: 50%;
    left: 50%;
    margin-top: -360px;
    margin-left: -580px;
    background-color: ${colors.tertiary};
    color: ${colors.quartenary};
`;

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px 80px;
    grid-gap: 20px;
`;

const ModalImg = styled.img`
    max-width: 490px;
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
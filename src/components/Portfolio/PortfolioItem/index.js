import React from 'react';
import ItemImage from '../../../assets/img/ItemPortfolio1.svg';
import PrintItem from '../../../assets/img/ItemPrint1.png';

import { 
    ItemImg, 
    Modal, 
    ModalImg, 
    ModalTitle, 
    ModalText, 
    LinkType, 
    ModalLink, 
    ContentWrapper,
    CloseButton
} from './PortfolioItem-styles';

export default function PortfolioItem() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    }

    const handleCloseClick = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <Modal isModalOpen={isModalOpen}>
                <CloseButton onClick={handleCloseClick}>X</CloseButton>
                <ContentWrapper>
                    <div>
                        <ModalImg src={PrintItem}/>
                    </div>
                    <div>
                        <ModalTitle>Controle Financeiro Pessoal</ModalTitle>
                        <ModalText>Projeto desenvolvido durante o Bootcamp fullstack da IGTI. O projeto consiste de um controle financeiro onde pode se adicionar, apagar, editar e deletar registros. No  Front End foi utilizado React e na estilização foi utilizado CSS Flexbox com Materialize. O Back End foi desenvolvido em Node.js, o banco de dados utilizado foi o MongoDB e o deploy foi feito no Heroku.</ModalText>
                        <LinkType>Link:</LinkType>
                        <ModalLink href="https://controle-financeiro-wander.herokuapp.com/">https://controle-financeiro-wander.herokuapp.com/</ModalLink>
                        <LinkType>GitHub:</LinkType>
                        <ModalLink href="https://github.com/wander-junior/Controle-Financeiro-Pessoal-IGTI">https://github.com/wander-junior/Controle-Financeiro-Pessoal-IGTI</ModalLink>
                    </div>
                </ContentWrapper>
            </Modal>
            <ItemImg src={ItemImage} alt="" onClick={handleImageClick} />
        </div>
    )
}

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
    CloseButton,
    ModalBackground
} from './PortfolioItem-styles';

export default function PortfolioItem({project}) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    }

    const handleCloseClick = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            {isModalOpen ? <ModalBackground onClick={handleCloseClick}/> : null}
            <Modal isModalOpen={isModalOpen}>
                <CloseButton onClick={handleCloseClick}>X</CloseButton>
                <ContentWrapper>
                    <div>
                        <ModalImg src={PrintItem}/>
                    </div>
                    <div>
                        <ModalTitle>{project.name}</ModalTitle>
                        <ModalText>{project.text}</ModalText>

                        {project.link !== '' ? 
                        <>
                            <LinkType>Link:</LinkType>
                            <ModalLink href={project.link}>{project.link}</ModalLink>
                        </> : null}

                        {project.github !== '' ?
                        <>                        
                            <LinkType>GitHub:</LinkType>
                            <ModalLink href={project.github}>{project.github}</ModalLink>
                        </> : null}
                        
                    </div>
                </ContentWrapper>
            </Modal>
            <ItemImg src={ItemImage} alt="" onClick={handleImageClick} />
        </div>
    )
}

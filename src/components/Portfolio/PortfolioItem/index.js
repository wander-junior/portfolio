import React from 'react';

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
        <li>
            {isModalOpen ? <ModalBackground onClick={handleCloseClick}/> : null}
            <Modal isModalOpen={isModalOpen}>
                <CloseButton onClick={handleCloseClick}>X</CloseButton>
                <ContentWrapper>
                    <div>
                        <ModalImg src={(`/img/${project.id}/print.png`)}/>
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
            <ItemImg 
                src={(`img/${project.id}/call.svg`)} 
                alt="" 
                onClick={handleImageClick} 
            />
            {console.log(`img/${project.id}/call.svg`)}
        </li>
    )
}

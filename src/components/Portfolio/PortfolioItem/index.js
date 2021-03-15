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
    ModalBackground,
    LinkWrapper,
    Middle,
    ItemImgWrapper,
    OverlayText
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
                    <ModalImg src={(`/img/${project.id}/print.png`)} alt={`Imagem do site ${project.name}`}/>
                    <div>
                        <ModalTitle>{project.name}</ModalTitle>
                        <ModalText>{project.text}</ModalText>

                        {project.link !== '' ? 
                        <LinkWrapper>
                            <LinkType>Link: </LinkType>
                            <ModalLink href={project.link}>{project.link}</ModalLink>
                        </LinkWrapper> : null}

                        {project.github !== '' ?
                        <>                        
                            <LinkType>GitHub: </LinkType>
                            <ModalLink href={project.github}>{project.github}</ModalLink>
                        </> : null}
                        
                    </div>
                </ContentWrapper>
            </Modal>

            <ItemImgWrapper onClick={handleImageClick} >
                <ItemImg 
                    src={(`img/${project.id}/call.svg`)} 
                    alt={`Logo do site ${project.name}`} 
                />
                <Middle>
                    <OverlayText>Saiba mais</OverlayText>
                </ Middle>
            </ItemImgWrapper>

        </li>
    )
}

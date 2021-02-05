import styled from 'styled-components';
import { typoSizes, colors } from '../../../styles';

const ItemWrapper = styled.li`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 370px;
`;

const Description = styled.p`
    font-size: ${typoSizes.small};
    line-height: ${typoSizes.smallLineHeight};
    text-align: center;
    padding-bottom: 40px;
    padding-top: 20px;
    min-width: 96px;
`;

const Subtitle = styled.h2`
    font-size: ${typoSizes.medium};
    font-weight: bold;
    margin-top: 20px;
    ::after {
        content: '';
        display: block;
        width: 40px;
        height: 3px;
        background: ${colors.tertiary};
        margin: 20px auto 0px auto;
    }
`;

const Icon = styled.img`
    margin-top: 20px;
`;

export { ItemWrapper, Description, Subtitle, Icon };
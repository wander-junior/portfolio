import styled from 'styled-components';
import { typoSizes, colors, renderAnimation } from '../../../styles';

const ItemWrapper = styled.li`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 370px;
    @media (max-width: 770px) {
        ${props => props.expanded ? '&:nth-child(1)::after, &:nth-child(2)::after' : '::after'} {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background: ${props => props.expanded ? colors.quartenary : colors.tertiary};
            margin: 40px auto 20px auto;    
        }
    }
`;

const Description = styled.p`
    font-size: ${typoSizes.small};
    line-height: ${typoSizes.smallLineHeight};
    text-align: center;
    padding-top: 20px;
    min-width: 96px;
    animation: ${renderAnimation(95)};
    animation-duration: 1s;
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
        background: ${props => props.expanded ? colors.quartenary : colors.tertiary};
        margin: 20px auto 0px auto;
    }
    animation: ${renderAnimation(90)};
    animation-duration: 1s;
`;

const Icon = styled.img`
    margin-top: 20px;
    animation: ${renderAnimation(80)};
    animation-duration: 1s;
`;

const AbilitiesListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${renderAnimation(99)};
    animation-duration: 1s;
    ::before {
        content: '';
        display: block;
        width: 20px;
        height: 3px;
        background: ${colors.quartenary};
        margin: 20px auto 30px auto;
    }
`;

const AbilitiesSubtitle = styled.h3`
    font-weight: bold;
    padding-bottom: 20px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
`;

export { ItemWrapper, Description, Subtitle, Icon, AbilitiesListWrapper, AbilitiesSubtitle, List, ListItem };
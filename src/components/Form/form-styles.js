import styled from "styled-components";
import { typoSizes } from '../../styles';

const Contact = styled.fieldset`
    padding-top: 60px;
`;

const LabelTxt = styled.p`
    font-size: ${typoSizes.medium};
    padding-bottom: 20px;
`;

const Input = styled.input`
    border: 3px solid #5B21CD;
    border-radius: 9px;
    min-width: calc(100% - 20px);
    height: ${props => props.name === "message" ? '180px;' : '60px;'};
    font-size: ${typoSizes.small};
    margin-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
`;

export { Contact, LabelTxt, Input };
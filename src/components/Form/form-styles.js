import styled from "styled-components";
import { typoSizes } from '../../styles';

const borderStyle = `
    border: 3px solid #5B21CD;
    border-radius: 9px;
    min-width: 470px;
    padding-left: 10px; 
    padding-right: 10px;
    margin-bottom: 40px;
`;

const Contact = styled.fieldset`
    padding-top: 60px;
`;

const LabelTxt = styled.p`
    font-size: ${typoSizes.medium};
    padding-bottom: 20px;
`;

const Input = styled.input`
    font-size: ${typoSizes.small};
    ${borderStyle}
    height: 60px;
`;

const InputTxtArea = styled.textarea`
    font-size: ${typoSizes.small};
    line-height: ${typoSizes.smallLineHeight};
    ${borderStyle}
    height: 180px;
    padding-bottom: 10px;
    padding-top: 10px;
`;

export { Contact, LabelTxt, Input, InputTxtArea };
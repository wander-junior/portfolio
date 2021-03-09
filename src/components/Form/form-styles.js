import styled from "styled-components";
import { typoSizes, colors } from '../../styles';

const borderStyle = `
    border: 3px solid ${colors.primary};
    border-radius: 9px;
    min-width: 470px;
    padding-left: 10px; 
    padding-right: 10px;
    margin-bottom: 40px;

    @media (max-width: 1200px) {
        min-width: 360px;
    }

    @media (max-width: 500px) {
        min-width: calc(100% - 20px);
    }
`;

const messageText = `
    padding-top: 60px;
    font-size: ${typoSizes.small};
    @media (max-width: 770px) {
        text-align: center;
    }
`;

const Contact = styled.fieldset`
    padding-top: 60px;
    
    @media (max-width: 770px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;

        ::after {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background: ${colors.quartenary};
            margin: 40px auto 0px auto;
        }
    }
`;

const LabelTxt = styled.p`
    font-size: ${typoSizes.medium};
    padding-bottom: 20px;

    @media (max-width: 770px) {
        padding-top: 40px;
    }
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

const SendConfirmation = styled.p`
    ${messageText};
    color: #31aa39;
`;

const SendFailure = styled.p`
    ${messageText};
    color: #f64540;
`;

export { Contact, LabelTxt, Input, InputTxtArea, SendConfirmation, SendFailure };
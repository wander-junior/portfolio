import React from 'react'
import * as emailjs from 'emailjs-com'; 

import Button from '../Button';
import { Contact, LabelTxt, Input, InputTxtArea, SendConfirmation, SendFailure } from './form-styles';
import { colors } from '../../styles';

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

export default function Form() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const [isSent, setIsSent] = React.useState(false);
    const [isSucess, setIsSucess] = React.useState(true);

    const handleChange = (e) => {
        if (e.target.name === 'name') setName (e.target.value);
        else if (e.target.name === 'email') setEmail (e.target.value);
        else if (e.target.name === 'message') setMessage (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const templetaParams = {
            from_name: email,
            to_name: 'wanderjrcruz96@gmail.com',
            subject: `Contato Portfólio ${name}`,
            message: message
        }

        emailjs.send(
            REACT_APP_SERVICE_ID,
            REACT_APP_TEMPLATE_ID,
            templetaParams,
            REACT_APP_USER_ID,
        ).then(() => {
            setIsSent(true);
        }, () => {
            setIsSent(true);
            setIsSucess(false);
        }) 

    }

    return (
            <>
                {isSent ?
                    isSucess ? 
                        <SendConfirmation>
                            <p>Formulário enviado com sucesso!</p>
                            <p>Em breve eu entro em contato com você.</p>
                        </SendConfirmation>
                    :
                        <SendFailure>
                            <p>Erro no envio!</p>
                            <p>Um erro ocorreu, tente entrar em contato comigo pelo email wanderjrcruz96@gmail.com.</p>
                        </SendFailure>
                : 
                    <form onSubmit={handleSubmit}>
                        <Contact>
                            <label>
                                <LabelTxt>Nome</LabelTxt>
                                <Input type="text" name="name" value={name} onChange={handleChange}/>
                            </label>
                            <label>
                                <LabelTxt>E-mail</LabelTxt>
                                <Input type="email" name="email" value={email} onChange={handleChange}/>
                            </label>
                            <label>
                                <LabelTxt>Mensagem</LabelTxt>
                                <InputTxtArea name="message" value={message} onChange={handleChange}/>
                            </label>
                            <Button 
                                text="Enviar" 
                                mainColor={colors.primary} 
                                secondaryColor={colors.tertiary}
                                hoverColor={colors.secondary}
                            />
                        </Contact>
                    </form>
                }
            </>
    )
}

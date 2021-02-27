import React from 'react'
import Button from '../Button';
import * as emailjs from 'emailjs-com';

import { Contact, LabelTxt, Input, InputTxtArea } from './form-styles';
import { colors } from '../../styles';

const { SERVICE_ID, TEMPLATE_ID, USER_ID } = process.env;

export default function Form() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

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
            SERVICE_ID,
            TEMPLATE_ID,
            templetaParams,
            USER_ID,
        )

    }

    return (
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
    )
}

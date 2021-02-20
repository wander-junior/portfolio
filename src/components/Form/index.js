import React from 'react'
import Button from '../Button';

import { Contact, LabelTxt, Input, InputTxtArea } from './form-styles';

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
                <Button text="Enviar" mainColor="#5B21CD" secondaryColor="#FEFDFE"/>
            </Contact>
        </form>
    )
}

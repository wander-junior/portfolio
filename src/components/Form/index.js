import React from 'react'
import Button from '../Button';

import { Contact, LabelTxt, Input, InputTxtArea } from './form-styles';

export default function index() {
    return (
        <form>
            <Contact>
                <label>
                    <LabelTxt>Nome</LabelTxt>
                    <Input type="text" name="name" />
                </label>
                <label>
                    <LabelTxt>E-mail</LabelTxt>
                    <Input type="email" name="email" />
                </label>
                <label>
                    <LabelTxt>Mensagem</LabelTxt>
                    <InputTxtArea name="message"/>
                </label>
                <Button text="Enviar" mainColor="#5B21CD" secondaryColor="#FEFDFE"/>
            </Contact>
        </form>
    )
}

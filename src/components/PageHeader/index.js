import React from 'react'
import { HeaderWrapper } from '../PageHeader/pageHeader-styles';

export default function index({name, text}) {
    return (
        <HeaderWrapper name={name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}>
            <h1>{name}</h1>
            <h2>{text}</h2>
        </HeaderWrapper>
    )
}

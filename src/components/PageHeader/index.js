import React from 'react'
import { HeaderWrapper } from '../PageHeader/pageHeader-styles';

export default function index({name, text}) {
    return (
        <HeaderWrapper name={name}>
            <h1>{name}</h1>
            <h2>{text}</h2>
        </HeaderWrapper>
    )
}

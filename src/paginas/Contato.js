import React from 'react';
import './Contato.css';
import ItemFormulario from './ItemFormulario';

function Contato() {
    return (
        <div className="Contato">
            <ItemFormulario name="nome" label="Nome" type="text" ph="Digite seu Nome:"/>
            <ItemFormulario name="nome" label="Email" type="email" ph="Digite seu E-mail:"/>
            <ItemFormulario name="nome" label="Mensagem" type="textarea" ph="Digite sua Mensagem:"/>
        </div>
    );
}

export default Contato;
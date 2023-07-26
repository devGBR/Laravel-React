import React from 'react'
import Input from './subcomponents/InputForm'
import Button from './subcomponents/Button'
import { useState } from 'react'
import { router } from '@inertiajs/react'
const NovaAba = () => {
    const [abas, setAbas] = useState({
        titulo: "",
      })

    const handleChange = (e) => {
        const key = e.target.id;
        const titulo = e.target.value.toUpperCase()
        setAbas(abas => ({
            ...abas,
            [key]: titulo,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(abas)
        if(!abas.titulo) return alert("Prenencha todos os campos!!")
        router.post('/create-aba', abas);
        // Limpa campos
        setAbas(abas => ({titulo: ""}));
        
     }
     const nada = () => {
        return null
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input title={"Nova Aba"} value={abas.titulo} id={"titulo"} funcao={handleChange} />
            <Button nome={'Criar aba'} funcao={nada}/>
        </form>

    )
}

export default NovaAba
import React, { useState } from 'react'
import Todo from './Todo';
import Button from './subcomponents/Button';
import { router } from '@inertiajs/react';


const Tabs = ({ aba, botao, abas, filter, tarefas, search, completeTodo, RemoveTodo, sort }) => {
    const [activeTab, setActiveTab] = useState("GERAL");

    function Delete(){
        if(activeTab !== "GERAL"){
            return <Button funcao={excluirAba} nome={"Excluir Selecionada"} />
        }
        return null
    }

    const excluirAba = () => {
        const abaExcluir = abas.find((aba) => aba.titulo === activeTab);

        if (abaExcluir) {
            // Aqui, você obtém o ID da aba e, em seguida, chama a rota de exclusão
            router.get("/remover-aba/" + abaExcluir.id);
        }
    }
    return (
        <div className="Tabs">
            <Button funcao={aba} nome={botao} /> <Delete/>
            <ul className="nav">
                {
                    abas.map((abas) => (
                        <li className={activeTab === abas.titulo ? "active" : ""} key={abas.id} onClick={() => setActiveTab(abas.titulo)}>{abas.titulo}</li>
                    ))
                }


            </ul>
            <div className="outlet">

                {tarefas.filter((tarefa) => tarefa.aba.toUpperCase() === activeTab)
                    .filter((tarefa) => filter === "All" ? true : filter === "Completed" ? tarefa.iscompleted : !tarefa.iscompleted)
                    .filter((tarefa) => tarefa.titulo.toLowerCase().includes(search.toLowerCase()))
                    .sort((a, b) => sort === "A-Z" ? a.titulo.localeCompare(b.titulo) : b.titulo.localeCompare(a.titulo))
                    .map((tarefas) => (
                        <Todo key={tarefas.id} tarefas={tarefas} RemoveTodo={RemoveTodo} completeTodo={completeTodo} />
                    ))}

            </div>

            <div className='info'>
                <p>
                    Clique em uma tarefa da lista para ver a descrição!!!
                </p>
            </div>
        </div>
    )
}

export default Tabs
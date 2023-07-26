import React from 'react'
import App from './App'

const Home = ({tarefas, abas}) => {

    return (
        <React.StrictMode>
            <App tarefas={tarefas} abas={abas}/>
        </React.StrictMode>
    )
}

export default Home
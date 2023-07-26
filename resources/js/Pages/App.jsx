import { useState } from 'react'
import '../../css/App.css'
import React from 'react'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'
import Search from '../components/Search'
import Filter from '../components/Filter'
import { router } from '@inertiajs/react'
import Tabs from '../components/Tabs'
import NovaAba from '../components/NovaAba'
import Button from '../components/subcomponents/Button'
import { Inertia } from '@inertiajs/inertia'

function App({tarefas, abas}) {
 
 
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [botao, setBotao] = useState("Nova Aba")
  const [nova, setNova] = useState(false)
  const [sort, setSort] = useState("A-Z")

  
  // const removeTodo = (id) => {
  //   const newTodo = [...todos];
  //   const filterTodo = newTodo.filter(
  //     (todos) => todos.id !== id ? todos : null
  //   );
  //   setTodos(filterTodo)
  // }
  const completeTodo = (id, tipo) => {
    if(tipo.toLowerCase() === "refazer" ){
      router.get('/refazer-task/' + id)
    }else if(tipo.toLowerCase() === "completar" ){
      router.get('/completar-task/' + id)
    }
    // 
  };
  const RemoveTodo = (id) => {
    router.get('/excluir-task/' + id)
  }
  const aba = (e) =>{
      setNova(!nova)
      

  }

  function NewAba(){
    if(nova === true){
      setBotao("Fechar")
      return  <NovaAba/>      
  }else{
    setBotao("Nova Aba")
  }
  return null
  }

  
    
  
  return (
   <div className="app">
    <h1>Lista de Tarefas</h1>

    
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
    <div className="listTodo">
     
       
      <NewAba/>
     
      <Tabs aba={aba} sort={sort} completeTodo={completeTodo} RemoveTodo={RemoveTodo} abas={abas} botao={botao} filter={filter} tarefas={tarefas} search={search}/>
      
    </div>
    <TodoForm  abas={abas} />
   </div>
  )
}

export default App


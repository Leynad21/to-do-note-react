import { useContext, useState } from 'react'
import AddButton from './components/AddButton'
import "./app.css"
import CardList from './components/CardList'
import AddNote from './components/AddNote'
import ToDoContext from './context/toDoContext'


function App() {

  const { clicked } = useContext(ToDoContext)



  return (
    <>
      <div className="container">
        <AddButton />
        <div className={` ${clicked ? "container__addNote" : 'hidden'}`}>
          <AddNote />
        </div>
        <div className={clicked && "overlay"}>
          <h1 className='app-title'>My Notes</h1>
          <CardList />
        </div>
      </div>
    </>
  )
}

export default App

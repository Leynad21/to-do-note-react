import { useState } from 'react'
import AddButton from './components/AddButton'
import "./app.css"
import CardList from './components/CardList'
import AddNote from './components/AddNote'



function App() {
  const [clicked, setClicked] = useState(false)

  const getClicked = (value) => {
    return setClicked(value)
  }

  const [toDoList, settoDoList] = useState([{
    title: "Title 1",
    description: "Something here to say and to write"
  },
  {
    title: "Title 2",
    description: "Something here to say and to write 2"
  }])

  const [toDoEdit, settoDoEdit] = useState({
    item: "",
    id: "",
    edit: false
  })



  const addNote = (newNote) => {
    settoDoList((prevItems) => {
      return (
        [...prevItems, newNote]
      )
    })
  }

  const deleteNote = (id) => {
    console.log("delete clicked")
    const newArray = toDoList.filter((item, index) => {
      return index !== id
    })
    settoDoList(newArray)
  }


  const editNote = (id) => {
    console.log("edit clicked");
    const itemToEdit = toDoList.filter((item, index) => index === id)
    settoDoEdit({
      item: itemToEdit[0],
      edit: true,
      id: id
    })
  }

  const updateNote = (id, updNote) => {
    console.log("udpate", id, updNote)
    settoDoList(
      toDoList.map((item, index) => {
        if (index === id) {
          return updNote
        } else {
          return item
        }
      }))
  }



  return (
    <>
      <div className="container">
        <AddButton getClicked={getClicked} />
        <div className={` ${clicked ? "container__addNote" : 'hidden'}`}>
          <AddNote
            clicked={clicked}
            setClicked={setClicked}
            addNote={addNote}
            toDoEdit={toDoEdit}
            settoDoEdit={settoDoEdit}
            updateNote={updateNote} />
        </div>
        <div className={clicked && "overlay"}>
          <h1 className='app-title'>To Do List</h1>
          <CardList
            toDoList={toDoList}
            deleteNote={deleteNote}
            editNote={editNote} />
        </div>
      </div>
    </>
  )
}

export default App

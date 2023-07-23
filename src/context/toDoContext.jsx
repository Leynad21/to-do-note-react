import { createContext, useState } from "react";


const ToDoContext = createContext("")


export const ToDoProvider = ({ children }) => {

    const [toDoList, settoDoList] = useState([{
        title: "Title 1 from context",
        description: "Something here to say and to write"
    },
    {
        title: "Title 2 from context",
        description: "Something here to say and to write 2"
    }])

    const [clicked, setClicked] = useState(false)

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
        settoDoList(
            toDoList.map((item, index) => {
                if (index === id) {
                    return updNote
                } else {
                    return item
                }
            }))
    }

    return <ToDoContext.Provider value={{
        toDoList: toDoList,
        clicked,
        setClicked: setClicked,
        deleteNote,
        addNote,
        toDoEdit,
        settoDoEdit,
        editNote,
        updateNote,

    }}>
        {children}
    </ToDoContext.Provider>
}

export default ToDoContext
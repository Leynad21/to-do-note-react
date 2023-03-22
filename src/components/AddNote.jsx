import React, { useEffect, useState } from 'react'

const AddNote = ({ clicked, setClicked, addNote, toDoEdit, settoDoEdit, updateNote }) => {

    const [note, setNote] = useState({
        title: "",
        description: "",
    });


    useEffect(() => {
        console.log('use effect')
        setClicked(!clicked)
        if (toDoEdit.edit === true) {
            setNote(() => {
                return {
                    'title': toDoEdit.item.title,
                    'description': toDoEdit.item.description,
                }
            })
        }
    }, [toDoEdit])


    const handleChange = (e) => {
        const { name, value } = e.target

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        if (toDoEdit.edit === true) {
            await updateNote(toDoEdit.id, note)
            await settoDoEdit(prevValue => {
                return {
                    ...prevValue,
                    edit: 'false'
                }
            }
            )
        } else {
            addNote(note)
        }
        setClicked(!clicked)
        setNote({
            title: "",
            description: "",
        })
        e.preventDefault()
    }



    return (
        <>
            <form className={`form__addNote ${clicked ? "form__active" : ''}`} >
                <div className='container__card'>
                    <div className="card__title form__addNote_title">
                        <input name="title"
                            value={note.title}
                            onChange={handleChange}
                            placeholder="Title" />
                    </div>
                    <div className="card__body form__addNote_body">
                        <textarea name="description"
                            onChange={handleChange}
                            rows={8}
                            placeholder="Description"
                            value={note.description}
                        />
                    </div>
                    <button className='button__form' onClick={handleSubmit}>Add</button>
                </div>
            </form>

        </>

    )
}

export default AddNote
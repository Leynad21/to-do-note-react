import React, { useContext, useState } from 'react'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import ToDoContext from '../context/toDoContext'

const AddButton = () => {

    const { clicked, setClicked, settoDoEdit } = useContext(ToDoContext)

    const handleClick = () => {
        setClicked(!clicked)
        settoDoEdit(prevValue => {
            return {
                item: "",
                id: "",
                edit: false
            }
        }
        )

    }



    return (
        <div className={''}>
            <BsFillPlusSquareFill className='plus-icon'
                onClick={handleClick} />
        </div>
    )
}

export default AddButton
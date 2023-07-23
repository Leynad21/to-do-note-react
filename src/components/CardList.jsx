import React, { useState } from 'react'
import Card from './Card'
import { useContext } from 'react'
import ToDoContext from '../context/toDoContext'

const CardList = () => {

    const { toDoList } = useContext(ToDoContext)

    return (
        <div className='cardList__container'>
            {toDoList.map((iter, index) => {
                return (
                    <Card
                        key={index}
                        id={index}
                        title={iter.title}
                        description={iter.description}
                    />
                )
            }
            )}
        </div >
    )
}

export default CardList
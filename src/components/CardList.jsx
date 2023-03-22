import React, { useState } from 'react'
import Card from './card'

const CardList = ({ toDoList, deleteNote, editNote }) => {


    return (
        <div className='cardList__container'>
            {toDoList.map((iter, index) => {
                return (
                    <Card
                        key={index}
                        id={index}
                        title={iter.title}
                        description={iter.description}
                        deleteNote={deleteNote}
                        editNote={editNote}
                    />
                )
            }
            )}
        </div >
    )
}

export default CardList
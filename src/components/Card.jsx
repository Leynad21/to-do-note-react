import React, { useContext } from "react";
import { MdDeleteForever } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'
import ToDoContext from "../context/toDoContext";

const Card = ({ title, description, id }) => {

  const { deleteNote, editNote } = useContext(ToDoContext)


  return (
    <div className="container__card">
      <div className="card__title">
        <h2>{title}</h2>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__icons">
        <div className="card__icon">
          <AiTwotoneEdit onClick={() => editNote(id)} />
        </div>
        <div className="card__icon">
          <MdDeleteForever onClick={() => deleteNote(id)} />
        </div>
      </div>
    </div>
  );
};

export default Card;

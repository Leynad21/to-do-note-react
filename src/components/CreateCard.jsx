import React, { useState } from "react";

const CreateCard = () => {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="container__card">
      <div className="card__title">
        <h2>{title}</h2>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CreateCard;

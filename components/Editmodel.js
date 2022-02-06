import React, { useState } from "react";
import editmodelStyle from "../styles/editmodel.module.css";

function Editmodel({ onEditTodo, edittxt, id }) {
  const [editedName, setEditedName] = useState(edittxt);
  const onEditNameChange = (e) => {
    setEditedName(e.target.value);
  };
  return (
    <div className={editmodelStyle.postmodel__container}>
      <div className={editmodelStyle.postmodel}>
        <h2>Edit Todo</h2>
        <div className={editmodelStyle.editinput__container}>
          <input
            type="text"
            value={editedName}
            onChange={(e) => onEditNameChange(e)}
          />
          <input
            type="submit"
            value="Edit"
            onClick={() => onEditTodo(editedName, id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Editmodel;

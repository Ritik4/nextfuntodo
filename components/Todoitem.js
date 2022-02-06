import React from "react";
import todoitemStyle from "../styles/todoitem.module.css";

function Todoitem({ todo, id, deleteTodo, isModelShow }) {
  return (
    <div className={todoitemStyle.todo__container}>
      <div className={todoitemStyle.todo__text}>
        <p>{todo}</p>
      </div>
      <div className={todoitemStyle.action__btns}>
        <input
          type="submit"
          value="Edit"
          style={{ marginRight: "5px" }}
          onClick={() => isModelShow(id)}
        />
        <input type="submit" value="Delete" onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
}

export default Todoitem;

import React, { useEffect, useState } from "react";
import Todoitem from "./Todoitem";
import todoStyle from "../styles/todo.module.css";
import Editmodel from "./Editmodel";

function Todo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(0);
  const TODO_KEY = "todo_key";

  //   localStorage.setItem(TODO_KEY, JSON.stringify(todoList));

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem(TODO_KEY)));
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTodoChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const onAddTodo = () => {
    setTodoList([...todoList, todoTitle]);
    setTodoTitle("");
  };

  const onRemoveTodo = (id) => {
    setTodoList(todoList.filter((todo, indx) => indx !== id));
  };

  const onEditTodo = (name, id) => {
    setTodoList(
      todoList.map((todo, indx) => (id === indx ? (todo = name) : todo))
    );
    setShowEdit(!showEdit);
  };

  const switchEditModel = (id) => {
    setShowEdit(!showEdit);
    setEditItemId(id);
  };

  return (
    <div className={todoStyle.todo}>
      <header className={todoStyle.todo__header}>
        <h1>TODO APP</h1>
      </header>

      <div className={todoStyle.todo__list}>
        <div className={todoStyle.todo__inputbox}>
          <input
            className={todoStyle.todo__input}
            type="text"
            onChange={(e) => onTodoChange(e)}
            placeholder="Enter your TODO"
            value={todoTitle}
          />
          <input
            className={todoStyle.addbtn}
            type="submit"
            value="Add"
            onClick={onAddTodo}
          />
        </div>
        <div className={todoStyle.todolist__container}>
          {todoList.map((todo, indx) => (
            <Todoitem
              todo={todo}
              key={indx}
              id={indx}
              deleteTodo={onRemoveTodo}
              isModelShow={switchEditModel}
            />
          ))}
          {showEdit && (
            <Editmodel
              edittxt={todoList[editItemId]}
              id={editItemId}
              onEditTodo={onEditTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;

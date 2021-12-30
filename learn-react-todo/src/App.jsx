import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [ todoText, setTodoText ] = useState("");
  const [ incompleteTodo, setIncompleteTodo ] = useState([
    'Item1',
    'Item2'
  ]);
  const [ completeTodo, setCompleteTodo ] = useState([
    'Item3'
  ]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodo);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  }

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  }

  return (
    <>
      <div>
        <h1>Welcome to React Todo.</h1>
        <input 
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          { incompleteTodo.map((item, index) => {
            return (
              <li key={item} className="flex">
                <p>{item}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          }) }
        </ul>
      </div>
      <div>
        <p>完了済みのTODO</p>
        <ul>
          { completeTodo.map((item, index) => {
            return (
              <li key={item} className="flex">
                <p>{item}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          }) }
        </ul>
      </div>
    </>
  );
}

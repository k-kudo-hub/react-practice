import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [ incompleteTodo, setIncompleteTodo ] = useState([
    'Item1',
    'Item2'
  ]);
  const [ completeTodo, setCompleteTodo ] = useState([
    'Item3'
  ]);

  return (
    <>
      <div>
        <h1>Welcome to React Todo.</h1>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          { incompleteTodo.map((item) => {
            return (
              <li key={item} className="flex">
                <p>{item}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          }) }
        </ul>
      </div>
      <div>
        <p>完了済みのTODO</p>
        <ul>
          { completeTodo.map((item) => {
            return (
              <li key={item} className="flex">
                <p>{item}</p>
                <button>戻す</button>
              </li>
            );
          }) }
        </ul>
      </div>
    </>
  );
}

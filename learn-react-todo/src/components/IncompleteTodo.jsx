import React from 'react';

const IncompleteTodo = (props) => {
  const { incompleteTodo, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了のTODO</p>
      <ul>
        { incompleteTodo.map((item, index) => {
          return (
            <li key={index} className="flex">
              <p>{item}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        }) }
      </ul>
    </div>
  )
}

export default IncompleteTodo;

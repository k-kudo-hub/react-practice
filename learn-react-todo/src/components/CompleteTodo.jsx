import React from 'react';

const CompleteTodo = (props) => {
  const { completeTodo, onClickBack } = props;
  return (
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
  )
}

export default CompleteTodo;

import React from 'react';

const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div>
      <h1>Welcome to React Todo.</h1>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  )
}

export default InputTodo;

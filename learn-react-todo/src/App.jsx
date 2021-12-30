import React, { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  // state管理する変数名と、stateを更新する関数名
  const [num, setNum] = useState(0);
  const [faceShowFlag, toggleFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickToggleShowFlag = () => {
    toggleFaceShowFlag(!faceShowFlag);
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>Learn React</h1>
      <ColorfulMessage 
        color="blue"
        message="お元気ですか？"
      />
      <ColorfulMessage
        color="pink"
        message="元気です"
      />
      <button　onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickToggleShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>（＾∇＾）</p>}
    </>
  );
}

export default App;

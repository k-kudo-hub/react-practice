import React, { useState, useEffect } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

// 状態の変更等によってJSが再レンダリングされる

const App = () => {
  console.log('start');
  // state管理する変数名と、stateを更新する関数名
  const [num, setNum] = useState(0);
  const [faceShowFlag, toggleFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickToggleShowFlag = () => {
    toggleFaceShowFlag(!faceShowFlag);
  };

  // useEffect 第2引数内の変数を監視し、状態が変化した際に内部の処理を実行する
  useEffect(() => {
    if(num > 0){
      if(num % 3 === 0) {
        faceShowFlag || toggleFaceShowFlag(true);
      } else {
        faceShowFlag && toggleFaceShowFlag(false);
      }
    }
  }, [num]);

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

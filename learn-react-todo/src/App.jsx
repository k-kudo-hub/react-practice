import React, { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  // state管理する変数名と、stateを更新する関数名
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
    </>
  );
}

export default App;

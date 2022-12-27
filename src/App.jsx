import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //レンダリングする際に、上からコードが呼ばれる
  //再レンダリングは、State変更、コンポーネントのPropsが変わった場合、親のコンポーネントがレンダリングされた時にある
  console.log("最初");
  //１つ目にStateの変数名、２つ目に更新していく関数名
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShow(!faceShow);
  };

  //[]内の変数に変更があった場合に処理を走らせる
  useEffect(() => {
    console.log("useEffect!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
    //eslint-disabled-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    //divなどでレンダリングせずに記載可能
    //<>でもOK
    //{}のなかはjavascript
    //{{}}は、javascript内のjavascriptのオブジェクトという意味
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントダウン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>(@~@)</p>}
    </>
  );
};

export default App;

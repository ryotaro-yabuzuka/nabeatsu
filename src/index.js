// JSXだけ使用する場合はimport入らない
//reactのコンポーネントはパスカルケース（区切りを大文字）にする
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Appをroot部分に反映という意味
ReactDOM.render(<App />, document.getElementById("root"));

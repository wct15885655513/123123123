import React from "react";
import style from "./Child.module.scss";

// console.log(style);
export default function Child() {
  return (
    <div>
      <ul>
        <li className={style.item}>child-111</li>
        <li className={style.item}>child-222</li>
      </ul>
    </div>
  );
}

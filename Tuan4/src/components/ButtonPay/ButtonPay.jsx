import React from "react";
import "./ButtonPay.css"

export default function ButtonPay(props) {
  const {src, text, pay, after} = props;
  return (
    <>
      <div>
        <button className={"btnSubs" + (pay ? " pay" : " notPay") + (after ? " after" : "")}>
            <img className="imgBtnSubs" src={src} alt="" />
            {text}
        </button>
      </div>
    </>
  );
}
import React from "react";
import "./OptionSub.css"

export default function OptionSubs(props) {
  const {src, text} = props;
  return (
    <>
      <div>
        <p className="optionsubs">
            <img src={src} alt="" />
            {text}
        </p>
      </div>
    </>
  );
}
import React from "react";
import "./AccessSubs.css"

export default function AccessSubs(props) {
  const {title, text} = props;
  return (
    <>
      <div className="block">
        <p className="titleChild">{title}</p>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
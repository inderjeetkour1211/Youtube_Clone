import React from "react";
import Button from "./Button";

function ButtonList() {
  const buttons = ["All", "Music", "Movies", "Mix", "News", "Live", "Sports"];

  //   return (
  //     //
  //       {/* <Button name="All"/>
  //       <Button name="Music"/>
  //       <Button name="News"/>
  //       <Button name="Mix"/> */}

  return (
    <div className="flex">
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
}

export default ButtonList;

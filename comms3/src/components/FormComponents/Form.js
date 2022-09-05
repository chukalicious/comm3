import React, { useState } from "react";
import FormRender from "./FormRender";

const Form = (props) => {
  console.log("Form.js: props: ", props);
  const [newReply, setNewReply] = useState({
    content: "",
    avatar: "",
  });
  console.log("Form: newReply: ", newReply);

  return (
    <>
      <FormRender
        setNewReply={setNewReply}
        setActiveState={props.setActiveState}
      />{" "}
    </>
  );
};

export default Form;

import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const FormRender = (props) => {
  console.log("FormRender: props: ", props);

  const [localReply] = useState();
  console.log("FormRender: localReply: ", localReply);

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setActiveState();
  };
  return (
    <div className="w-full flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] px-4 mt-6 flex flex-col"
      >
        <textarea
          className="w-[100%] p-4 border-gray-200 border-2 rounded-md "
          name="reply"
          cols="50"
          rows="10"
        ></textarea>
        <div className="flex justify-between mt-4">
          <img alt="me" src={user.image} className="p-3 w-16 h-16" />{" "}
          <button className="uppercase tracking-wider py-1 px-5 rounded-xl text-white text-xl min-w-[25%] text-center bg-[#5E5DA7] ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRender;

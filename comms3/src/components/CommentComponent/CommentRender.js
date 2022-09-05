import iconminus from "../../interactive-comments-section-main/images/iconminus.svg";
import iconplus from "../../interactive-comments-section-main/images/iconplus.svg";
import iconreply from "../../interactive-comments-section-main/images/iconreply.svg";

import { useState } from "react";

const CommentRender = (props) => {
  console.log("ComentRender: props: ", props);

  //   must have local state for the counter:
  const [score, setScore] = useState(0);
  console.log("CommentRender: score: ", score);

  const handleUpVote = (e) => {
    e.stopPropagation();
    setScore(() => {
      return score + 1;
    });
  };

  const handleDownVote = (e) => {
    e.stopPropagation();
    setScore(() => {
      return score - 1;
    });
  };

  /////////////// END OF COUNTER

  return (
    <div className="my-5 mx-5 bg-[#fff] rounded-lg py-4">
      <div className="flex w-full justify-items-center ">
        <img
          className="max-w-[15%] py-2 pl-2"
          alt="user avatar"
          src={props.commentsData.user.image}
        />{" "}
        <h1 className="w-[40%] px-4 text-center pt-4 font-semibold text-xl">
          {props.commentsData.user.username}
        </h1>
        <h2 className="w-[45%] px-4 text-center pt-4 text-gray-500 font-semibold text-lg">
          {props.commentsData.createdAt}
        </h2>
      </div>
      <div className="py-2 px-4">
        <p>{props.commentsData.content}</p>
      </div>
      <div className="px-4 flex w-full justify-between">
        <div className="flex rounded-lg font-semibold text-[#5E5DA7] ">
          <button className="p-2" onClick={handleUpVote}>
            {" "}
            <img src={iconplus} alt="upvote" />
          </button>
          {score}
          <button className="p-2" onClick={handleDownVote}>
            <img src={iconminus} alt="downvote" />
          </button>
        </div>
        <button className="font-semibold inline-flex text-[#5E5DA7]">
          <img className="my-2 pr-2" src={iconreply} alt="reply" /> Reply{" "}
        </button>
      </div>
      <div className="w-full flex ml-8 ">
        {props.commentsData.replies.length > 0 ? (
          <div
            className="mr-5
          "
          >
            {props.commentsData.replies.map((reply, i) => (
              <div
                className="flex flex-col my-5 mx-5 rounded-lg border-[#f5f6fa] border-4 py-4 bg-white"
                key={i + 10}
              >
                <div className=" flex w-full justify-items-center">
                  <img
                    className="max-w-[15%] py-2 pl-2"
                    alt="user avatar"
                    src={reply.user.image}
                  />{" "}
                  <h1 className="w-[40%] px-4 text-center pt-4 font-semibold text-xl">
                    {reply.user.username}
                  </h1>
                  <h2 className="w-[45%] px-4 text-center pt-4 text-gray-500 font-semibold text-lg">
                    {reply.createdAt}
                  </h2>
                </div>
                <div className="py-2 px-4">
                  <p>
                    <span className="font-bold text-[#5E5DA7]">
                      @{reply.replyingTo}
                    </span>{" "}
                    {reply.content}
                  </p>
                </div>
                <div className="px-4 flex w-full justify-between">
                  <div className="rounded-lg flex font-semibold text-[#5E5DA7] bg-[#f5f6fa]">
                    <button className="p-2">
                      <img src={iconplus} alt="upvote" />{" "}
                    </button>
                    {reply.score}
                    <button className="p-2">
                      <img src={iconminus} alt="downvote" />{" "}
                    </button>
                  </div>
                  <button className="font-semibold inline-flex text-[#5E5DA7]">
                    <img className="my-2 pr-2" src={iconreply} alt="reply" />{" "}
                    Reply{" "}
                  </button>
                </div>
              </div>
            ))}{" "}
          </div>
        ) : null}
      </div>{" "}
    </div>
  );
};

export default CommentRender;

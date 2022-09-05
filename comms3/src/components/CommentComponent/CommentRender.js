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
    <div>
      <div>
        <img alt="user avatar" src={props.commentsData.user.image} />{" "}
        <h1>{props.commentsData.user.username}</h1>
        <h2>{props.commentsData.createdAt}</h2>
      </div>
      <div>
        <p>{props.commentsData.content}</p>
      </div>
      <div>
        <div>
          <button onClick={handleUpVote}>plus</button>
          {score}
          <button onClick={handleDownVote}>minus</button>
        </div>
        <button>Reply</button>
      </div>
    </div>
  );
};

export default CommentRender;

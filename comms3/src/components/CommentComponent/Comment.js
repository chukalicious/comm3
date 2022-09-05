import { data as projectData } from "../../data";
import { useState, useEffect } from "react";
import CommentRender from "./CommentRender";

const Comment = () => {
  const [userData, setUserData] = useState({});
  console.log("Comment: userData:", userData);
  const [comments, setCommentsData] = useState([]);
  console.log("Comment: comments:", comments);

  useEffect(() => {
    setUserData(projectData.currentUser);
    setCommentsData(projectData.comments);
  }, []);
  return (
    <div className="w-full">
      {comments.map((comm, i) => (
        <CommentRender key={i} commentsData={comm} />
      ))}{" "}
    </div>
  );
};

export default Comment;

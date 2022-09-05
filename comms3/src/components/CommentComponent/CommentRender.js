const CommentRender = (props) => {
  console.log("ComentRender: props: ", props);
  return (
    <div>
      <div>
        <img alt="user avatar" /> <h1>username</h1>
        <h2>time ago</h2>
      </div>
      <div>
        <p>comment</p>
      </div>
      <div>
        <div>
          <button>plus</button>the count number<button>minus</button>
        </div>
        <button>reply</button>
      </div>
    </div>
  );
};

export default CommentRender;

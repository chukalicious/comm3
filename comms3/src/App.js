import Comment from "./components/CommentComponent";
import { data as userData } from "./data";
import { UserContext } from "./contexts/UserContext";

function App() {
  const currentUser = userData.currentUser;
  return (
    <UserContext.Provider value={currentUser}>
      <div className="box-border">
        <Comment />{" "}
      </div>
    </UserContext.Provider>
  );
}

export default App;

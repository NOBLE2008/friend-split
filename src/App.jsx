import { useState } from "react";
import "./App.css";
import FriendCon from "./components/FriendCon";

function App() {
  const [friends, setFriends] = useState([]);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendCon friends={friends} />
      </div>
    </div>
  );
}

export default App;

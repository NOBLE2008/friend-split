import { useState } from "react";
import "./App.css";
import FriendCon from "./components/FriendCon";
import FormAddFriend from "./components/FormAddFriend";

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState(null);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendCon
          friends={friends}
          selectedFriends={selectedFriends}
          setSelectedFriends={setSelectedFriends}
        />
        <FormAddFriend
          onAddFriend={setFriends}
        />
      </div>
    </div>
  );
}

export default App;

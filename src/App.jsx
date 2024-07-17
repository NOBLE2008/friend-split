import { useState } from "react";
import "./App.css";
import FriendCon from "./components/FriendCon";
import FormAddFriend from "./components/FormAddFriend";
import FormUpdateFriend from "./components/FormUpdateFriend";

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState({
    id: 1,
  });

  return (
    <div className="app">
      <div className="sidebar">
        <FriendCon
          friends={friends}
          selectedFriends={selectedFriends}
          setSelectedFriends={setSelectedFriends}
        />
        <FormAddFriend onAddFriend={setFriends} />
      </div>
      <FormUpdateFriend
        selectedFriends={selectedFriends}
        setSelectedFriends={setSelectedFriends}
        friends={friends}
        setFriends={setFriends}
        key={selectedFriends.id}
      />
    </div>
  );
}

export default App;

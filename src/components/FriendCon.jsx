import React from "react";
import Friend from "./Friend";

const FriendCon = ({ friends, selectedFriends, setSelectedFriends }) => {
  return (
    <ul>
      {friends.map((item) => (
        <Friend
          item={item}
          selectedFriends={selectedFriends}
          setSelectedFriends={setSelectedFriends}
        />
      ))}
    </ul>
  );
};

export default FriendCon;

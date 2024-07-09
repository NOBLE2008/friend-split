import React from "react";
import Button from "./Button";

const Friend = ({ item, selectedFriends, setSelectedFriends }) => {
  const nullOut = () => {
    setSelectedFriends({
      id: 1
    });
  };
  const selectField = () => {
    setSelectedFriends({
      name: item.name,
      id: item.id,
      me: item.me,
      friend: item.friend,
      owe: item.owe,
    });
  };
  return (
    <li>
      <img src="/download.jpeg" alt="" />
      <h3>{item.name}</h3>
      {item.me == item.friend ? (
        <p>You and {item.name} are even</p>
      ) : item.owe === "you" ? (
        <p className="red">
          You owe {item.name} £{item.me}
        </p>
      ) : (
        <p className="green">
          {item.name} owes you £{item.friend}
        </p>
      )}
      <Button onClick={item.id === selectedFriends.id ? nullOut : selectField}>
        {item.id === selectedFriends.id ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;

import React from "react";

const Friend = ({ item, selectedFriends, setSelectedFriends }) => {
  return (
    <li>
      <img src="/download.jpeg" alt="" />
      <h3>{item.name}</h3>
      {item.me == item.friend ? (
        <p>You and Anthony are even</p>
      ) : item.owe === "you" ? (
        <p className="red">
          You owe {item.name} £{item.me}
        </p>
      ) : (
        <p className="green">
          {item.name} owes you £{item.friend}
        </p>
      )}
    </li>
  );
};

export default Friend;

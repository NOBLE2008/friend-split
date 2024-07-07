import React from "react";

const Friend = ({ item, selectedFriends, setSelectedFriends }) => {
  return <li>
    <img src="/download.jpeg" alt="" />
    <p>{item.name}</p>
  </li>;
};

export default Friend;

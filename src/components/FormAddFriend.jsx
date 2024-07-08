import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    me: 0,
    friend: 0,
    owe: "none",
  });
  
  const handleChange = (e) => {
    // Add friend logic here
    setNewFriend((cur) => {
      return {
        ...cur,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFriend((cur) => {
      return [...cur, { ...newFriend, id: Date.now() }];
    });
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👫 Friend Name</label>
      <input type="text" id="name" />
      <label htmlFor="image">🌄 Image URL</label>
      <input type="text" id="image" />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

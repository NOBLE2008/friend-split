import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    me: 0,
    friend: 0,
    owe: 'none',
  });
  const handleChange = (e) => {
    // Add friend logic here
    setNewFriend((cur) => {
        return {
            ...cur,
            [e.target.name]: e.target.value
        }
    })
  };
  return (
    <form className="form-add-friend">
      <label htmlFor="name">👫 Friend Name</label>
      <input type="text" id="name" />
      <label htmlFor="image">🌄 Image URL</label>
      <input type="text" id="image" />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

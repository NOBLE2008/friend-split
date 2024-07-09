import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    me: 0,
    friend: 0,
    img: '',
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
      <input type="text" id="name" name="name" onChange={handleChange}/>
      <label htmlFor="image">🌄 Image URL</label>
      <input type="text" id="image" name="img" onChange={handleChange}/>
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

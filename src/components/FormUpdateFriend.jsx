import React, { useState } from "react";
import Button from "./Button";

const FormUpdateFriend = ({ selectedFriends, friends, setSelectedFriends, setFriends }) => {
  const friendConfirm = friends.find(
    (friend) => friend.id === selectedFriends.id
  );
  if (!friendConfirm || selectedFriends == 1) {
    return <div></div>;
  } else {
    const [formVal, setFormVal] = useState({
      id: friendConfirm.id,
      total: 0,
      me: friendConfirm.me,
      friend: friendConfirm.friend,
      who: 'me'
    });
    const handleChange = (e) => {
      setFormVal(cur => {
        return {
         ...cur,
          [e.target.name]: e.target.value
        };
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFriends((cur) => {
        return {
          ...cur,
          me: formVal.me,
          friend: formVal.friend,
          owe: formVal.me == formVal.friend ? 'none': formVal.who == 'me' ? 'friend' : 'you'
        }
      });

      setSelectedFriends({
        id: 1
      })
      
    }
    return (
      <form action="" className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriends.name}</h2>
        <label htmlFor="value">💰 Bill Value</label>
        <input type="number" id="value" name="total" value={formVal.total} onChange={handleChange}/>
        <label htmlFor="your-expense">🧍‍♀️ Your expense</label>
        <input type="number" id="your-expense" name="me" value={formVal.me} onChange={handleChange}/>
        <label htmlFor="friend-expense">👫 {selectedFriends.name}'s expense </label>
        <input type="number" id="friend-expense" disabled name="friend" value={(formVal.total) - formVal.me}/>
        <label htmlFor="who-pays">🤑 Who is paying</label>
        <select name="who" id="" value={formVal.who} onChange={handleChange}>
          <option value="me">You</option>
          <option value="friend">Friend</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    );
  }

};

export default FormUpdateFriend;

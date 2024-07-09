import React, { useState } from "react";

const FormUpdateFriend = ({ selectedFriends, friend, setSelectedFriends, setFriends }) => {
  const friendConfirm = friend.find(
    (friend) => friend.id === selectedFriends.id
  );

  if (!friendConfirm) {
    return <div></div>;
  } else {
    const [formVal, setFormVal] = useState({
      id: friendConfirm.id,
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
      setSelectedFriends((cur) => {
        return {
          ...cur,
          me: formVal.me,
          friend: formVal.friend,
          owe: formVal.me == formVal.friend ? 'none': formVal.who == 'me' ? 'friend' : 'you'
        }
      });
      
    }
    return (
      <form action="" className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriends.name}</h2>
        <label htmlFor="value">💰 Bill Value</label>
        <input type="text" id="value" name="total" value={formVal.me + formVal.friend}/>
        <label htmlFor="your-expense">🧍‍♀️ Your expense</label>
        <input type="text" id="your-expense" name="me" value={formVal.me} onChange={handleChange}/>
        <label htmlFor="friend-expense">👫 {selectedFriends.name}'s </label>
        <input type="text" id="friend-expense" name="friend" value={(formVal.me + formVal.friend) - formVal.me}/>
        <label htmlFor="who-pays">🤑 Who is paying</label>
        <select name="who" id="" value={formVal.who} onChange={handleChange}>
          <option value="me">You</option>
          <option value="friend">Friend</option>
        </select>
      </form>
    );
  }

};

export default FormUpdateFriend;

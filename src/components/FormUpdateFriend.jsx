import React from 'react'

const FormUpdateFriend = ({selectedFriends}) => {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {selectedFriends.name}</h2>
      <label htmlFor="value">💰 Bill Value</label>
      <input type="text" id="value" name='total'/>
      <label htmlFor="your-expense">🧍‍♀️ Your expense</label>
      <input type="text" id="your-expense" name='me'/>
      <label htmlFor="friend-expense">👫 {selectedFriends.name}'s </label>
      <input type="text" id="friend-expense" name='friend'/>
      <label htmlFor="who-pays">🤑 Who is paying</label>
      <select name="who" id="">
        <option value="0">You</option>
        <option value="1">Friend</option>
      </select>
    </form>
  )
}

export default FormUpdateFriend

import React from 'react'

const FormUpdateFriend = ({selectedFriends}) => {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {selectedFriends.name}</h2>
      <label htmlFor="value">💰 Bill Value</label>
      <input type="text" id="value" />
      <label htmlFor="your-expense">🧍‍♀️ Your expense</label>
      <input type="text" id="your-expense" />
      <label htmlFor="friend-expense">👫 {selectedFriends.name}'s </label>
      <input type="text" id="friend-expense" />
      <label htmlFor="who-pays">🤑 Who is paying</label>
      <input type="text" id="who-pays" />
    </form>
  )
}

export default FormUpdateFriend

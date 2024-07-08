import React from 'react'

const FormUpdateFriend = ({selectedFriends}) => {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {selectedFriends.name}</h2>
      <label htmlFor="value">💰 Bill Value</label>
      <input type="text" id="value" />
    </form>
  )
}

export default FormUpdateFriend

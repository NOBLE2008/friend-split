import React from 'react'
import Friend from './Friend'

const FriendCon = ({friends}) => {
  return (
        <ul>
            {friends.map(item => <Friend item={item}/>)}
        </ul>
  )
}

export default FriendCon

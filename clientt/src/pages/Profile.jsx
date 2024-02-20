import React from 'react';
import monkeyPng from '../assets/monkey.png'
function Profile() {
  return (
    <div>
        <h1>Hello </h1>
        <img src={monkeyPng} alt="" className="h-96 mr-48 mt-40" />
    </div>
  )
}

export default Profile
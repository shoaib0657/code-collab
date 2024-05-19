import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const Home = () => {

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault()
    const id = uuid();
    setRoomId(id);
  }

  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='homePageLogo' src='/code-collab.png' alt='code-collab-logo'></img>
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4>

        <div className='inputGroup'>
            <input type='text' className='inputBox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value={roomId} />
            <input type='text' className='inputBox' placeholder='USERNAME' onChange={(e) => setUsername(e.target.value)} value={username} ></input>
            <button className='btn joinBtn'>Join</button>
            <span className='createInfo'>
                Don't have a invite, create a <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a> 
            </span>
        </div>

      </div>

      <footer>
        <h4>
            Made with ❤️ by <a href='https://github.com/shoaib0657'>Shoaib</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home

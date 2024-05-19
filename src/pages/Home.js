import React from 'react'

const Home = () => {
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='homePageLogo' src='/code-collab.png' alt='code-collab-logo'></img>
        <h4 className='mainLabel'>Paste invitation ROOM ID</h4>

        <div className='inputGroup'>
            <input type='text' className='inputBox' placeholder='ROOM ID' />
            <input type='text' className='inputBox' placeholder='USERNAME' ></input>
            <button className='btn joinBtn'>Join</button>
            <span className='createInfo'>
                Don't have a invite, create a <a href='' className='createNewBtn'>new room</a> 
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

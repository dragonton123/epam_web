import React from 'react'
import './Footer.css'
export default () => {
  return (
    <footer className='footer'>
      <div className='container' >
        <div className='content has-text-centered'>
          <p>
            Electronic Provincial Administration Meeting
          </p>
          <img src={require('../../assets/image/logo_below.png')} alt='epam-icon'/>
        </div>
      </div>
    </footer>
  )
}

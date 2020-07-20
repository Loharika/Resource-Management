import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../logo.svg'
import { DASHBOARD_SIGNIN_PAGE } from '../../../Authentication/constants/NavigationalConstants'
function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code> src / App.js </code> and save to reload.{' '}
            </p>{' '}
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React{' '}
            </a>
            <Link to={DASHBOARD_SIGNIN_PAGE}> Resource Management </Link>
         </header>
      </div>
   )
}

export default App
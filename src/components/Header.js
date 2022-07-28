import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <h1><Link exact to="/">&#8592;     </Link>ReduxEcommerce</h1>
        </div>
    </div>
  )
}

export default Header
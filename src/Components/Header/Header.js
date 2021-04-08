import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <div className='header container my-4'>
            <nav className='nav'>
                 <h3 className="logo-name">Team Buildup</h3>
                 <ul className='d-flex'>
                     <input type="text" placeholder='search player' className='form-control mr-2'/>
                     <button className="btn btn-primary">Search</button>
                 </ul>
            </nav>
        </div>
    )
}

export default Header

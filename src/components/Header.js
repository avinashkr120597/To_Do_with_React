import React from 'react'
import logo from '../asset/images/logo.png';

export const Header = () => {
    return (
         <header className="header">
             <nav>
             <div className="logo">
                 <img className="img" src={logo} alt="to-do List"></img>
             </div>
                 To-Do List
             </nav>
         </header>
    )
}
export default Header;

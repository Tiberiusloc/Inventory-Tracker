import React from "react";

function Header(){
  return ( 
    <React.Fragment>
      <nav className="nav">
        <p className="site-title">StarBlocks</p>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Notifications</p>
          </li>
          <li>
            <p>Messages</p>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header;
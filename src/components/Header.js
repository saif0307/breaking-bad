import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () => {
    
    
    return (
        <div className="ui secondary pointing menu">
            <div className="header item" >
                BREAKING BAD
            </div>
        <NavLink exact to="/"   className="item">
          Characters
        </NavLink>
        <NavLink to="/episodes"  className="item">
        Episodes
        </NavLink>
        <NavLink to="quotes"  className="item">
          Quotes
        </NavLink>
        <NavLink to="deaths"  className="item">
          Deaths
        </NavLink>
      </div>

    )
}

export default Header
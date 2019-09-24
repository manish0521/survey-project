import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom';
import Context from '../Context/Context';

export default class Navbar extends Component {

  static contextType = Context;

  render() {

    const { isAuth, user, logout } = this.context;

    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">

        <NavLink exact to='/' className="nav-link" activeClassName="selected" >Home</NavLink>
        
        <ul className="nav justify-content-end ml-auto">
          <li className="nav-item">
            { !isAuth  ? <NavLink exact to='/sign-up' className="nav-link" activeClassName="selected">Sign up</NavLink> : <NavLink exact to={{
                                                                                                                                                pathname: '/profile',
                                                                                                                                                profile: user
                                                                                                                                              }} className="nav-link" activeClassName="selected">Profile</NavLink>}
          </li>
          <li className="nav-item">
          { !isAuth ? <NavLink exact to='/sign-in' className="nav-link" activeClassName="selected">Sign in</NavLink>: <NavLink exact to='/' onClick={() => logout()} className="nav-link">Logout</NavLink>}

          </li>
          
        </ul>
      </nav>




    )
  }
}


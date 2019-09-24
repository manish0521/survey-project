import React, { Component } from 'react'
import Context from '../Context/Context';
import { Redirect } from 'react-router-dom'

export default class SignUp extends Component {

  static contextType = Context;

  state = {
    email: '',
    password: ''
  }

  componentDidUpdate() {
    // console.log(this.props.history)
    if (this.context.isAuth) {
      this.props.history.push('/')
    }
  }

  handleSignIn = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.context.handleSignUp(this.state)
  }

  render() {
    return (
      <div className='text-center'>
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>

        <label htmlFor="inputEmail" className="sr-only">First Name</label>
        <input className="form-control" type="text" placeholder="First Name" autoFocus={true} ref="name" 
                name="FirstName"/>
       <label htmlFor="inputEmail" className="sr-only">Last Name</label>
        <input className="form-control" type="text" placeholder="Last Name" autoFocus={true} ref="name"
                name="LastName"/>

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="text" id="inputEmail" className="form-control" placeholder="Email address" name='email' onChange={this.handleSignIn} required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="text" id="inputPassword" className="form-control" placeholder="Password" name='password' onChange={this.handleSignIn} required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
      </form>
  </div>
    )
  }
}
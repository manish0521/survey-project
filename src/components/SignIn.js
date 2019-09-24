import React, { Component } from 'react'
import Context from '../Context/Context';


export default class SignIn extends Component {

  static contextType = Context;

  state = {
    email: '',
    password: ''
  }

  componentDidUpdate() {
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

    this.context.handleSignIn(this.state)

  }

  render() {

    return (
      <div className='text-center'>
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign In</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="text" id="inputEmail" className="form-control" placeholder="Email address" name='email' onChange={this.handleSignIn} required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="text" id="inputPassword" className="form-control" placeholder="Password" name='password' onChange={this.handleSignIn} required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2019-2020</p>
      </form>
  </div>
    )
  }
}

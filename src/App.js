import React, { Component } from 'react'

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Result from './components/Result';
import PrivateRoute from './components/PrivateRoute';

import Context from './Context/Context';
import { apiHandleSignUp, apiHandleSignin, handleJWTExpirationApi } from './utils/api';


import './App.css';

export default class App extends Component {

  state = {
    isAuth: false,
    user: null,
    message: 'Please Login to use the app'
  }

  componentDidMount() {

    handleJWTExpirationApi()
      .then( user => {

        this.setState({
          user: user.email,
          isAuth: true
        })

      })
      .catch( error => {

      })

  }

  handleSignUp = (userInfo) => {
      
    apiHandleSignUp(userInfo)
      .then( user => {
   
        this.setState({
          user: user.email,
          isAuth: true
        }, () => {
          return <Redirect to='/' />
        })
      })
      .catch( error => {

      })

  }

  handleSignIn = (userInfo) => {

    apiHandleSignin(userInfo)
    .then( user => {

      this.setState({
        user: user.email,
        isAuth: true
      }, () => {
        return <Redirect to='/' />
      })

    })
    .catch( error => {
      
    })

  }

  logout = () => {
    this.setState({
      user: null,
      message: 'Please login to use the app',
      isAuth: false
    }, () => {
      localStorage.removeItem('jwtToken')
      return <Redirect to='/' />
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          isAuth: this.state.isAuth,
          user: this.state.user,
          message: this.state.message,
          handleSignIn: this.handleSignIn,
          handleSignUp: this.handleSignUp,
          logout: this.logout
        }}
      >
        <Router>
        
          <Navbar />
              <Switch>
                {/* <Route exact path='/' component={Home} /> */}
                <Route exact path='/' render={(props) => <Home {...props}  />} />
                <Route path='/sign-up' render={(props) => <SignUp  {...props} />} />
                <Route path='/sign-in' render={(props) => <SignIn {...props}  />} />
                <Route path='/results' render={(props) => <PrivateRoute {...props} {...this.state} component={Result}  />}/>
                <Switch>
                  <Route path='/profile' render={(props) => <PrivateRoute {...props} {...this.state} component={Profile}  />} />
                </Switch>
                
                
                <Route component={NotFound} />
              </Switch>
        

        </Router>
      </Context.Provider>
    )
  }
}

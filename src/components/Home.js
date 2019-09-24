import React, { Component } from 'react'
import Context from '../Context/Context';
import queryString from 'query-string'
import Survey from './Survey'

export default class Home extends Component {

  static contextType = Context;

  componentDidMount(){
      console.log(queryString.parse(this.props.location.search))
  }

  render() {
    
    return (
      <div>
       <Survey />
      </div>
    )
  }
}

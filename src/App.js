import Profile from './component/profile/profilePhoto';
import FullName from './component/profile/fullName';
import Adress from './component/profile/adress';
import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
    return (
      <div>
      <Profile/>
      <FullName/>
      <Adress/>  
      
      </div>
    )
  }
}



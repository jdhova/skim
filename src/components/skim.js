
import React, { Component } from 'react'
import Input from './input'
import Factorials from './factorials'
import '../App.css';

class skim extends Component {
  render() {
    return (
      <div className ='row'>
        <Input/>
        <Factorials />

      </div>
    )
  }
}

export default skim




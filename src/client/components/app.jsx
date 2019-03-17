import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class Demo extends Component {
  render() {
    return (
      <div>
        Welcome to React Boilerplate created successfully...
        <Button className="btn-danger">Danger!</Button>
        <img src="../assets/images/enhanced-buzz.jpg"/>
      </div>
    )
  }
}

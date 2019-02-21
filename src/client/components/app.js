import React, { Component } from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Demo extends Component {
  render() {
    return (
      <div>
        Welcome to React Boilerplate created successfully...
        <Button color="danger">Danger!</Button>
      </div>
    )
  }
}

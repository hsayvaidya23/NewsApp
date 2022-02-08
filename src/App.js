import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Bobby"
  render() {
    return (
      <div>
        Hello my first class base component {this.c};
      </div>
    )
  }
}

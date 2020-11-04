import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        { id: "1", name: "user 1" },
        { id: "2", name: "user 2"},
        { id: "3", name: "user 3"}
      ]
    });

 this.handleDeleteRow = this.handleDeleteRow.bind(this);
  }
handleDeleteRow = (pid) => {
alert(pid);
    let data = [...this.state.data];
    data.splice(data.findIndex(({ id }) => id === pid), 1);
    this.setState({ 
      data: data
    })
  }

  render() {


    return (
      <span>
        <label>
          <ul>
            {this.state.data.map(person => (
              <li key={person.id}>
                {person.name}
                <br />

<button onClick={() => this.handleDeleteRow(person.id)} style={{color:'red'}}>Delete</button>
              </li>
            ))}
          </ul>
        </label>
      </span>
    );
  }
}
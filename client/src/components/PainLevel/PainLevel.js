import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class PainLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <Button  color="success" className="Btn" onClick={this.IncrementItem}>Click to increse by 1</Button>
        <Button  color="success" className="Btn" onClick={this.DecreaseItem}>Click to decrease by 1</Button>
        <Button  color="success" className="Btn" onClick={this.ToggleClick}>{ this.state.show ? 'Hide number' : 'Show number' }</Button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default PainLevel;
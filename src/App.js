import React from 'react';
import Clock from "./Clock";
import { Button, Container, } from "semantic-ui-react";
import Data from './Data'
import Graphic from './Graphic'

class App extends React.Component {
  state = { showClock: false, showDate: false};

  toggleShowClock = () => {
    this.setState( state => {
      return { showClock: !state.showClock, };
    })
  }

  toggleShowData = () => {
    this.setState( state => {
      return { showData: !state.showData, };
    });
  }

  render() {
    return (
      <Container style={{ marginTop: "25px", }}>
        { this.state.showClock && <Clock /> }
        <Button onClick={this.toggleShowClock} color="blue">Click for Clock</Button>
        { this.state.showData && <Data /> }
        <Button onClick={this.toggleShowData} color="orange">Click for Data</Button>
        <Graphic />
      </Container>
    );
  }
}

export default App;
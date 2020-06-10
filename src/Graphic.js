import React from "react";
export default class Graphic extends React.Component {
  state = {
    squareX: 0,
    squareY: 0,
    dx: 5,
    dy: 5,
  };
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.tick();
    }, 100);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.squareX > 700 - squareSize) {
      this.setState({
        dx: -5,
        squareX: length - squareSize,
      });
    }
    if (prevState.squareX < 1) {
      console.log(prevState.squareX);
      this.setState({
        dx: 5,
        squareX: 1,
      });
    }
    if (prevState.squareY > 700 - squareSize) {
      this.setState({
        dy: -4,
        squareY: length - squareSize,
      });
    }
    if (prevState.squareY < 1) {
      this.setState({
        dy: 4,
        squareY: 1,
      });
    }
  }
  tick() {
    const { squareX, squareY, dx, dy } = this.state;
    console.log(squareX);
    console.log(squareY);
    const newSquareX = squareX + dx;
    const newSquareY = squareY + dy;
    this.setState({
      squareX: newSquareX,
      squareY: newSquareY,
    });
  }
  render() {
    const { squareX, squareY } = this.state;
    return (
      <div style={styles}>
        <div style={{ ...squareStyles, top: squareY, left: squareX, }}>
        </div>
      </div>
    );
  }
}
const length = 600;
const squareSize = 70;
const squareStyles = {
  position: "absolute",
  background: "green",
  width: `${squareSize}px`,
  height: `${squareSize}px`,
  fontSize: "8px",
};

const styles = {
  position: "relative",
  background: "Orange",
  margin: "auto",
  border: "1px solid",
  width: `600px`,
  height: `600px`,
};
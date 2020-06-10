
import React from "react";

class Clock extends React.Component {
    state = {date: new Date()};

    tick = () => this.setState({
        date: new Date() })

        componentDidMount() {
            console.log("mounted")
        }

        componentDidUpdate() {
            console.log("updated")
        }

        componentWillUnmount() {
            console.log("unmounting")
        }

        render() {
            console.log("render")
            return <p>{this.state.date.toLocaleTimeString()}</p>
        }
}

export default Clock;
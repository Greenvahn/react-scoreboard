import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
      }

    // Lifecycle method built in react
    // It triggers just after the component has been mounted into the dom    
    componentDidMount () {
        
    }
      
    tick = () => {

    }

    handleStopwatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        })
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                    <button onClick={ this.handleStopwatch }>
                        { this.state.isRunning ? 'Stop' : 'Start' }
                    </button>
                <button>Reset</button>
            </div>
        )
    }

}

export default Stopwatch;
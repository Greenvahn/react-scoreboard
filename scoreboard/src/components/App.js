import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ],
    highScore: 0
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta, highScore) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta,
     //highScore: prevState.highScore <= prevState.players[index].score ? prevState.highScore = prevState.players[index].score : prevState.highScore 
      highScore: prevState.highScore = highScore
    }));
    // this.handleHighScore(this.state.score)
    //console.log('index: ' + index, 'delta: ' + delta)
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => ({
      players: [
        ...prevState.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    }));
  }


  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }


  reviewScore = (players) => {
    let maxScore = 0
    players.forEach(el => {
      el.score >= maxScore &&  el.score > 0 ? maxScore = el.score : maxScore;
    });
    return maxScore;
    console.log("reviewScore", maxScore)
  }

  render() {
    return (
      <Provider value={this.state.players}>
      <div className="scoreboard">
        <Header
          players={this.state.players}
          highscore={this.state.highScore}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            highScore={this.reviewScore(this.state.players)}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
      </Provider>
    );
  }
}

export default App;

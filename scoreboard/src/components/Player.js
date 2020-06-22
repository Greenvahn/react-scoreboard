import React, {PureComponent} from 'react';
import Counter from './Counter'

class Player extends PureComponent {
    
  render (props) {
    const { removePlayer, name, score, changeScore, index, id} = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
        score={score}
        updateScore={changeScore} 
        index={index}
        />
      </div>
    );
  }
  
  }

  export default Player;
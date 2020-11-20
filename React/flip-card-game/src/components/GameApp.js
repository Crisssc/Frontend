import Cards from './Cards';
import Control from './Control';
import React from 'react';
import shuffle from './../utils/shuffle';

class GameApp extends React.Component {
  state = {
    cardNum: 0,
    cards: [],
  };

  getCardNum = (val) => {
    this.setState({ cardNum: val });
  };

  generateCards = () => {
    this.setState({ cards: shuffle() });
  };

  removeMatchedCards = (cardInput) => {
    const oldCards = this.state.cards;

    this.setState({ cards: oldCards.filter((c) => c.id !== cardInput.id) });
  };

  render() {
    return (
      <div className="game_container">
        <Cards />
      </div>
    );
  }
}

export default GameApp;
// <Control
//   getCardNum={this.getCardNum}
//   generateCards={this.generateCards}
// />

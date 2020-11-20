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
    if (!isNaN(val)) {
      this.setState({ cardNum: val, cards: shuffle(val) });
    }
    // console.log(this.state.cards);
    return this.state.cardNum;
  };

  removeMatchedCards = (cardInput) => {
    const oldCards = this.state.cards;

    this.setState({ cards: oldCards.filter((c) => c.id !== cardInput.id) });
  };

  resetHandler = () => {
    this.setState({ cards: [] });
  };

  render() {
    return (
      <div className="game_container">
        <Control
          resetHandler={this.resetHandler}
          getCardNum={this.getCardNum}
        />
        <Cards cardNum={this.state.cardNum} cards={this.state.cards} />
      </div>
    );
  }
}

export default GameApp;

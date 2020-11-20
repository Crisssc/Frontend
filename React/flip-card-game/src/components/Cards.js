import Card from './Card';
import React from 'react';
import shuffle from './../utils/shuffle';

class Cards extends React.Component {
  state = {
    pair: [],
  };

  componentDidUpdate() {
    this.pairCheck();
  }

  pairCheck = () => {
    const { pair } = this.state;
    if (pair.length === 2) {
      let card1 = this.props.cards[pair[0]];
      let card2 = this.props.cards[pair[1]];
      let oldCards = this.props.cards;
      if (card1.id === card2.id) {
        oldCards[pair[0]].match = true;
        oldCards[pair[1]].match = true;
        this.setState({ cards: [...oldCards] });
      } else {
        setTimeout(() => {
          oldCards[pair[0]].flip = false;
          oldCards[pair[1]].flip = false;
          this.setState({ cards: [...oldCards] });
        }, 1000);
      }
      this.setState({ pair: [] });
    }
  };

  onFlipAction = (cardIndex) => {
    let curPair = this.state.pair;
    if (curPair.length < 1) {
      this.setState({ pair: [...curPair, cardIndex] });
    } else {
      if (curPair[0] === cardIndex) {
        this.setState({ pair: [] });
      } else {
        this.setState({ pair: [...curPair, cardIndex] });
      }
    }
    this.pairCheck();
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="header">CARD FLIP GAME</h1>
        </div>
        <div className="cards-list">
          {this.props.cards.map((card) => (
            <Card
              key={card.index}
              card={card}
              onFlipAction={this.onFlipAction}
              flip={card.flip}
              id={card.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;

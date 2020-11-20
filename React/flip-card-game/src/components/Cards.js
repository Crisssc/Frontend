import Card from './Card';
import React from 'react';
import shuffle from './../utils/shuffle';

class Cards extends React.Component {
  state = {
    cards: shuffle(),
    pair: [],
  };

  componentDidUpdate() {
    this.pairCheck();
  }

  pairCheck = () => {
    const { pair } = this.state;
    if (pair.length === 2) {
      console.log('check the pair', pair);
      let card1 = this.state.cards[pair[0]];
      let card2 = this.state.cards[pair[1]];
      let oldCards = this.state.cards;
      if (card1.id === card2.id) {
        console.log('matched');
        // let id = card1.id;
        // let oldCards = [...this.state.cards].filter((c) => c.id === id);
        // this.setState({ cards: oldCards });

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
    this.setState({ pair: [...curPair, cardIndex] });
    this.pairCheck();
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="header">CARD FLIP GAME</h1>
        </div>
        <div className="cards-list">
          {this.state.cards.map((card) => (
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

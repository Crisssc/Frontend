import { CARD_BACK } from './images';
import React from 'react';

class Card extends React.Component {
  state = {
    card: {},
    flip: this.props.flip,
    id: this.props.id,
  };

  onCardClick = (card) => {
    if (!card.match) {
      card.flip = !card.flip;
      this.props.onFlipAction(card.index);
    }
  };

  handleClassName = (flip) => (flip ? 'card is-flipped' : 'card');

  render() {
    const { card, flip } = this.props;
    let cName = this.handleClassName(flip);
    return (
      <div onClick={() => this.onCardClick(card)} className={cName}>
        <div className="card__face card__face--front">
          <img src={CARD_BACK.src} alt={card.description} />
        </div>
        <div className="card__face card__face--back">
          <img src={card.src} alt={card.description} />
        </div>
      </div>
    );
  }
}

export default Card;

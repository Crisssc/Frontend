import cards from './../components/images';

export default function shuffle(val) {
  let count = 0;
  let newCard = cards.slice(0, val);
  console.log('generate:s', val, 'pair of cards');
  //duplicate original cards
  let list = [...newCard, ...newCard].sort(() => Math.random() - 0.5);
  return list.map((img) => {
    return { index: count++, flip: false, match: false, ...img };
  });
}

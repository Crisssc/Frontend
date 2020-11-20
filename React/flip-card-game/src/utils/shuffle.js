import cards from './../components/images';

let count = 0;

export default function shuffle() {
  //duplicate original cards
  let list = [...cards, ...cards].sort(() => Math.random() - 0.5);
  return list.map((img) => {
    return { index: count++, flip: false, match: false, ...img };
  });
}

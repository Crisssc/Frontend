import Card_2D from './../imgs/2D.png';
import Card_5C from './../imgs/5C.png';
import Card_6D from './../imgs/6D.png';
import Card_7S from './../imgs/7S.png';
import Card_9H from './../imgs/9H.png';
import Card_AC from './../imgs/AC.png';
import Card_Back from './../imgs/red_back.png';
import Card_JS from './../imgs/JS.png';

const images = [
  { id: 0, src: Card_AC, description: 'card' },
  { id: 1, src: Card_2D, description: 'card' },
  { id: 2, src: Card_5C, description: 'card' },
  { id: 3, src: Card_7S, description: 'card' },
  { id: 4, src: Card_6D, description: 'card' },
  { id: 5, src: Card_9H, description: 'card' },
  { id: 6, src: Card_JS, description: 'card' },
];
const card_back = { id: 7, src: Card_Back, description: 'card' };
export const CARD_BACK = card_back;
export default images;

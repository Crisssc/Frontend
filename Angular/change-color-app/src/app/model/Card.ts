export class Card {
  id: number;
  title: string;
  paragraph: string;
  constructor(id: number, title: string, paragraph: string) {
    this.id = id;
    this.title = title;
    this.paragraph = paragraph;
  }
}

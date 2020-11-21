import Card from './Card';
import React from 'react';

class Playground extends React.Component {
  state = {
    selectedColor: '',
    list: [
      { index: 0, color: 'red', selected: false },
      { index: 1, color: 'green', selected: false },
      { index: 2, color: 'yellow', selected: false },
      { index: 3, color: 'blue', selected: false },
    ],
  };

  hendleOnSelect = (index) => {
    let newList = [...this.state.list];
    newList.forEach((item) => {
      if (item.index === index) {
        item.selected = true;
        this.setState({ selectedColor: item.color });
      } else {
        item.selected = false;
      }
    });
    this.setState({ list: newList });
  };

  render() {
    return (
      <div>
        <h1 className={`head ${this.state.selectedColor}`}>Title</h1>
        {this.state.list.map((v) => (
          <Card key={v.index} info={v} hendleOnSelect={this.hendleOnSelect} />
        ))}
      </div>
    );
  }
}

export default Playground;

let ele1 = document.getElementById('click1');
let ele2 = document.getElementById('click2');

class App {
  constructor() {
    this.value = 12;
    this.func1 = this.func1.bind(this);
    // this.func3 = this.func3.bind(this);
  }
  func1(val) {
    console.log(this);
    this.func2();
    console.log('val', val)
  }

  func2() {
    console.log('app func2');
    this.func3();
  }

  func3() {
    console.log('from func3: ', this);
  }
}

let funcApp = new App();
const { func3 } = funcApp;
func3(); // App{value:12, func1:f}, 'app func2'


function func11() {
  console.log('func1');
  console.log(this);
}

func22 = () => {
  console.log('func2');
  console.log(this);
}

// ele1.addEventListener('click', function () { appFunc1 }, false);
// ele2.addEventListener('click', () => { func2() }, false);



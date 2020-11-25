class MyPromise {
  constructor(callBackFun) {
    this.result = "";
    this.error = "";
    this.state = "pending";
    callBackFun(this.resolve.bind(this), this.reject.bind(this));
    console.log(1);
  }

  resolve(value) {
    this.result = value;
    this.state = "fullfilled";
    console.log(2);
  }

  reject(error) {
    this.error = error;
    this.state = "rejected";
    console.log(3);
  }

  then(callback) {
    if (this.state === "fullfilled") {
      callback(this.result);
      console.log(4);
    }
    return this;
  }

  catch(callback) {
    if (this.state === "rejected") {
      callback(this.error);
      console.log(5);
    }
  }
}

const p = new MyPromise((res, rej) => {
  res('res');
  console.log(6);
})

p.then((v) => console.log('value : ', v))
  .catch((e) => console.log('err: ', e));

Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i]));
  }
  return res;
}

let a = [1, 2, 3, 4];
console.log(a.myMap((v) => v * 2));


console.log(a.reduce((acc, cur) => acc += cur, 0));

Array.prototype.myReduce = function (callback, initVal) {
  let res = initVal;
  for (let i = 0; i < this.length; i++) {
    res = callback(res, this[i]);
  }
  return res;
}

console.log('myReducer: ', a.reduce((acc, cur) => acc += cur, 0));

Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const res = words.myFilter((word) => word.length > 6);
console.log(res);

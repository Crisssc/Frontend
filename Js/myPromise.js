const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hi from resolve');
  }, 0)
});

// promise.then((res) => console.log(res));

class MyPromise {
  constructor(executer) {
    this.result = '';
    this.error = '';
    this.success = false;
    this.fail = false;
    executer(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(data) {
    this.result = data;
    this.result ? this.success = true : this.success = false;
  }

  reject(err) {
    this.error = err;
    this.error ? this.fail = true : this.fail = false;
    console.log('err');
  }

  then(callback) {
    if (this.success) {
      callback(this.result);
    }
    return this;
  }

  catch(err) {
    if (this.fail) {
      err(this.error);
    }
  }
}

const myPro = new MyPromise((res, rej) => {
  // const result = 'hi from the myPromise';
  // setTimeout(() => {
  //   res(result);
  // }, 1000);
  // res(result);
  const value = 'value';
  res(value);
})

myPro.then((data) => console.log('data: ', data));

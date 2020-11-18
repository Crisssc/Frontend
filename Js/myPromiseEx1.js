class MyPro {
  constructor(executor) {
    this.status = 'pending';
    this.value = '';
    this.error = '';
    executor(this.resolve.bind(this), this.reject.bind(this));
    this.onResolveCallBacks = [];
    this.onRejectCallBacks = [];
    console.log(1);
  }

  resolve(data) {
    if (this.status === 'pending') {
      this.value = data;
      this.status = 'resolved';
      console.log(2);
      this.onResolveCallBacks.forEach((callback) => callback());      
    }
  }

  reject(error) {
    if (this.status === 'pending') {
      this.error = error;
      this.status = 'rejected';
      this.onRejectCallBacks.forEach((callback) => callback());      
    }
  }

  then(callback) {
    if (this.status === 'resolved') {
      callback(this.value);
      console.log(4);
    }
    
    if (this.status === 'pending') {
      this.onResolveCallBacks.push(() => {
        callback(this.value);
      });
      console.log(3, this.value);
    }
    return this;
  }

  catch(callback) {
    if (this.status === 'rejected') {
      callback(this.error);
    }

    if (this.status === 'pending') {
      this.onRejectCallBacks.push(() => {
        callback(this.error);
      });
    }
  }
}

const myP = new MyPro((res, rej) => {
  console.log(5);
  setTimeout(() => {
    res('hi');
    // rej('error');
    console.log(6);
  }, 2000);
});

let thenObj = myP.then(data => {
  console.log(7, data);
});

console.log(thenObj);

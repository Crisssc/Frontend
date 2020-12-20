function MyPromise(exector) {
  let self = this;

  this.status = 'pending';
  this.value;
  this.reason;

  this.onResolvedCallBacks = [];

  this.onRejectedCallBacks = [];

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';
      self.onResolvedCallBacks.forEach(fn => fn());
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
      self.onRejectedCallBacks.forEach(fn => fn());
    }
  }

  try {
    exector(resolve, reject);
  } catch(e) {
    reject(e);
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  let self = this;
  if (this.status === 'resolved') {
    onFulfilled(self.value);
  }

  if (this.status === 'rejected') {
    onRejected(self.reason);
  }

  if (this.status === 'pending') {
    this.onResolvedCallBacks.push(() => {
      console.log('from pending: ',self.value);
      onFulfilled(self.value);
    });

    this.onRejectedCallBacks.push(() => {
      onRejected(self.reason);
    })
  }
}

let myPro = new MyPromise((res, rej) => {
  setTimeout(() => {
    res('haha');
  }, 1500)
});

myPro.then(data => {
  console.log('### From my promise: ', data);
})
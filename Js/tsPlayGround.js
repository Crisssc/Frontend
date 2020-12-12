var MyObservable = /** @class */ (function () {
    function MyObservable(producer) {
        this.producer = producer;
    }
    MyObservable.prototype.subscribe = function (observer) {
        this.producer(observer);
    };
    return MyObservable;
}());
var obs$ = new MyObservable(function (observer) {
    observer.next(2);
    setTimeout(function () { return observer.next(4); }, 20);
    setTimeout(function () { return observer.error('error'); }, 300);
});
obs$.subscribe({
    next: function (n) { return console.log('next', n); },
    error: function (err) { return console.log('error', err); },
    complete: function () { return console.log('complete'); }
});
console.log('haha');

"use strict";
exports.__esModule = true;
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
// obs$.subscribe({
//   next: (n: number) => console.log('next', n),
//   error: (err: any) => console.log('error', err),
//   complete: () => console.log('complete')
// });
/**
 * My Operator
 */
var rxjs_1 = require("rxjs");
var myOperator = function (source) {
    return new rxjs_1.Observable(function (observer) {
        source.subscribe(function (next) {
            console.log('next', next);
            observer.next(next);
        }, function (error) {
            console.log('error', error);
            observer.error(error);
        }, function () {
            console.log('complete');
            observer.complete();
        });
    });
};
// of(1, 2, 3).pipe(
//   myOperator
// ).subscribe((next: number) => console.log(next));

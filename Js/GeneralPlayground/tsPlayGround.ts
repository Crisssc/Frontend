/**
 * My Observable
 */
interface MyObserver<T> {
  next: (n: T) => void;
  error: (err: any) => void;
  complete: () => void;
}

class MyObservable<T> {
  constructor(private producer: (observer: MyObserver<T>) => void) { }

  subscribe(observer: MyObserver<T>) {
    this.producer(observer);
  }
}

const obs$ = new MyObservable<number>((observer: MyObserver<number>) => {
  observer.next(2);
  setTimeout(() => observer.next(4), 20);
  setTimeout(() => observer.error('error'), 300);
});

// obs$.subscribe({
//   next: (n: number) => console.log('next', n),
//   error: (err: any) => console.log('error', err),
//   complete: () => console.log('complete')
// });

/**
 * My Operator
 */
import { Observable, Observer, of } from 'rxjs';
const myOperator = <T>(source: Observable<T>) => {
  return new Observable((observer: Observer<T>) => {
    source.subscribe(
      (next: T) => {
        console.log('next', next);
        observer.next(next);
      },
      (error: any) => {
        console.log('error', error);
        observer.error(error);
      },
      () => {
        console.log('complete');
        observer.complete();
      }
    )
  });
}

// of(1, 2, 3).pipe(
//   myOperator
// ).subscribe((next: number) => console.log(next));
// MyObserver
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

obs$.subscribe({
  next: (n: number) => console.log('next', n),
  error: (err: any) => console.log('error', err),
  complete: () => console.log('complete')
});

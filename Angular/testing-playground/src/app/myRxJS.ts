import { Observable, Observer, Subscription } from 'rxjs';

/**
 * MyObserver
 */
export interface MyObserver<T> {
  next: (n: T) => void;
  error: (error: any) => void;
  complete: () => void;
}

export class MyObservable<T> {
  constructor(private producer: (observer: MyObserver<T>) => void) { }

  subscribe(observer: MyObserver<T>) {
    this.producer(observer);
  }
}

/**
 * MyOperator
 */
export const myOperator = <T>(source: Observable<T>) => {
  return new Observable((observer: Observer<T>) => {
    const subscription = source.subscribe(
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
    );
    return subscription;
  });
};

/**
 * MyCombineLatest Operator
 */
const NONE = {};
export const myCombineLatest = (...observables: Array<Observable<any>>) => {
  return new Observable((observer: Observer<Array<any>>) => {
    // initialize the array with NONE obj
    const values = Array.from({ length: observables.length }).map(_ => NONE);
    let toRespond = observables.length;
    const numOfObservables = observables.length;
    let numOfObservablesCompleted = 0;

    const subscriptions = observables.map((obs, i) => obs.subscribe(
      (next: any) => {
        // keep a reference to the last next event of every observable
        // have all of the observables emitted a value
        if (values[i] === NONE) {
          // first next event for this source observable
          toRespond--;
        }
        values[i] = next;

        if (toRespond === 0) {
          // if all of the observables have emitted a value
          observer.next(values);
        }
      },
      (error: any) => {
        observer.error(error);
      },
      () => {
        // if ALL of the source observables completed;
        numOfObservablesCompleted++;
        if (numOfObservables === numOfObservablesCompleted) {
          observer.complete();
        }
      },
    ));

    // clearn up process
    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  });
};

/**
 * myFilter Operator
 */
export const myFilter = <T>(filterFun: (n: T) => boolean) => (source: Observable<T>) => {
  return new Observable((observer: Observer<T>) => {
    const subscription = source.subscribe(
      (next: T) => {
        if (filterFun(next)) {
          observer.next(next);
        }
      },
      (err: any) => {
        observer.error(err);
      },
      () => {
        observer.complete();
      },
    );
    subscription.unsubscribe();
  });
};

/**
 * myInterval Operator
 */
export const myInterval = (intervalTime: number) => {
  return new Observable((observer: Observer<number>) => {
    let count = 0;
    const intervalId = setInterval(() => {
      observer.next(count++);
    }, intervalTime);

    return () => {
      clearInterval(intervalId);
    };
  });
};

/**
 * myMap Operator
 */
export const myMap = <T>(mapFunc: (n: T) => T) => (source: Observable<T>) => {
  return new Observable((observer: Observer<T>) => {
    const subscription = source.subscribe(
      (next: T) => {
        observer.next(mapFunc(next));
      },
      (error: any) => {
        observer.error(error);
      },
      () => {
        observer.complete();
      }
    );

    subscription.unsubscribe();
  });
};

/**
 * myMerge Operator
 */
export const myMerge = (...observables: Array<Observable<any>>) => {
  return new Observable((observer: Observer<any>) => {
    const numOfObservables = observables.length;
    let numOfObservablesComplete = 0;
    const subscriptions = observables.map(obs => obs.subscribe(
      (next: any) => {
        observer.next(next);
      },
      (error: any) => {
        observer.error(error);
      },
      () => {
        numOfObservablesComplete++;
        if (numOfObservables === numOfObservablesComplete) {
          observer.complete();
        }
      }
    ));

    return () => {
      subscriptions.forEach(subscription => subscription.unsubscribe());
    };
  });
};

/**
 * myMergeMap Operator
 */
export const myMergeMap = <T>(project: (n: T) => Observable<any>) =>
  (source: Observable<T>) => {
    return new Observable((observer: Observer<any>) => {
      let active = 0;
      let outerSubCompleted = false;
      const subscription = new Subscription();
      subscription.add(
        source.subscribe(
          (next: T) => {
            active++;
            // the subscription 👇 is simultaneously
            project(next).subscribe(
              (nextNext: any) => observer.next(nextNext),
              (error: any) => observer.error(error),
              () => {
                active--;
                if (active === 0 && outerSubCompleted) {
                  observer.complete();
                }
              }
            );
          },
          (error: any) => {
            observer.error(error);
          },
          () => {
            outerSubCompleted = true;
            if (active === 0) {
              observer.complete();
            }
          }
        )
      );
      subscription.unsubscribe();
    });
  };

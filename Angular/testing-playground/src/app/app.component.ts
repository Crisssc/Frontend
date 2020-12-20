import { MyObservable, MyObserver, myCombineLatest, myFilter, myInterval, myMap, myMerge, myMergeMap, myOperator } from './myRxJS';
import { Observable, Observer, combineLatest, interval, of, pipe } from 'rxjs';
import { filter, map, mergeMap, take } from 'rxjs/operators';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-playground';
  obs$ = new MyObservable<number>((observer: MyObserver<number>) => {
    observer.next(1000);
    setTimeout(() => {
      observer.next(1001);
    }, 1000);
    setTimeout(() => {
      observer.complete();
    }, 1000);
  });

  clickObs(): void {
    this.obs$.subscribe(
      {
        next: (n: number) => console.log('next', n),
        error: (err: any) => console.log('error', err),
        complete: () => console.log('complete!'),
      }
    );
  }

  clickOpt(): void {
    of(1, 2, 3).pipe(
      myOperator
    ).subscribe((next: number) => console.log(next));
  }

  clickOptCombineLates(): void {
    const obs1 = new Observable((observer: Observer<number>) => {
      observer.next(1);
      setTimeout(() => { observer.next(2); }, 10);
      setTimeout(() => { observer.next(3); }, 30);
      setTimeout(() => { observer.complete(); }, 50);
    });

    const obs2 = new Observable((observer: Observer<string>) => {
      observer.next('a');
      setTimeout(() => { observer.next('b'); }, 20);
      setTimeout(() => { observer.next('c'); }, 40);
      setTimeout(() => { observer.complete(); }, 50);
    });

    myCombineLatest(obs1, obs2).subscribe(val => {
      console.log(val);
    });
  }

  clickOptFilter(): void {
    of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
      myFilter((v: number) => v % 2 === 0)
      // filter((v: number) => v % 2 === 0)
    ).subscribe(val => {
      console.log(val);
    });
  }

  clickOptInterval(): void {
    myInterval(2000).subscribe((val: number) => {
      console.log(val);
    });
  }

  clickOptMap(): void {
    of(1, 2, 4, 5, 6).pipe(
      myMap((x: number) => x * 10)
    ).subscribe(val => {
      console.log(val);
    });
  }

  clickOptMerge(): void {
    const obs1 = new Observable((observer: Observer<number>) => {
      observer.next(1);
      setTimeout(() => observer.next(2), 10);
      setTimeout(() => observer.next(3), 30);
      setTimeout(() => observer.next(4), 40);
      setTimeout(() => observer.next(5), 70);
    });
    const obs2 = new Observable((observer: Observer<string>) => {
      observer.next('AA');
      setTimeout(() => observer.next('a'), 20);
      setTimeout(() => observer.next('b'), 50);
      setTimeout(() => observer.next('c'), 60);
      setTimeout(() => observer.next('d'), 90);
    });

    myMerge(obs1, obs2).subscribe(
      val => {
        console.log(val);
      }
    );
  }


  clickOptMergeMap(): void {
    // const obs = new Observable((observer: Observer<number>) => {
    //   observer.next(1);
    //   setTimeout(() => observer.next(2), 30);
    //   setTimeout(() => observer.next(22222), 40);
    //   setTimeout(() => observer.complete(), 50);
    // }).pipe(
    //   mergeMap(val => map((v) => (v + val))
    // ).subscribe(val => console.log(val));
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      myMergeMap(
        x => interval(1000).pipe(
          map(i => x + i),
          take(5))
      ),
    );
    result.subscribe(x => console.log(x));
  }
} 

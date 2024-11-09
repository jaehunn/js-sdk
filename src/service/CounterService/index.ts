import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export class CounterService {
  // 상태를 관리하는 BehaviorSubject
  private count$: BehaviorSubject<number>

  constructor(initialCount = 0) {
    this.count$ = new BehaviorSubject<number>(initialCount)
  }

  // 1. 카운트 값 구독 (Observable)
  public getCount(): Observable<number> {
    return this.count$.asObservable()
  }

  // 2. 카운트를 증가시키는 메서드
  public increment(): void {
    this.count$.next(this.count$.value + 1)
  }

  // 3. 카운트를 감소시키는 메서드
  public decrement(): void {
    this.count$.next(this.count$.value - 1)
  }

  // 4. 특정 기준 이상인지 여부를 반환하는 메서드
  public isCountAbove(threshold: number): Observable<boolean> {
    return this.count$.pipe(map((count) => count >= threshold))
  }
}

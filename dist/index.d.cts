import { Observable } from 'rxjs';

declare class CounterService {
    private count$;
    constructor(initialCount?: number);
    getCount(): Observable<number>;
    increment(): void;
    decrement(): void;
    isCountAbove(threshold: number): Observable<boolean>;
}

declare class SDK {
    counterService: CounterService;
    constructor();
}

export { SDK as default };

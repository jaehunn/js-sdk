import { firstValueFrom } from 'rxjs'
import { CounterService } from '.'

describe('CounterService', () => {
  let counterService: CounterService

  beforeEach(() => {
    counterService = new CounterService()
  })

  describe('초기화', () => {
    it('기본값으로 0이 설정되어야 한다', async () => {
      const count = await firstValueFrom(counterService.getCount())
      expect(count).toBe(0)
    })

    it('초기값을 지정하면 해당 값으로 설정되어야 한다', async () => {
      const initialCount = 5
      const counter = new CounterService(initialCount)

      const count = await firstValueFrom(counter.getCount())
      expect(count).toBe(initialCount)
    })
  })

  describe('increment()', () => {
    it('카운트가 1 증가해야 한다', async () => {
      counterService.increment()

      const count = await firstValueFrom(counterService.getCount())
      expect(count).toBe(1)
    })
  })

  describe('decrement()', () => {
    it('카운트가 1 감소해야 한다', async () => {
      counterService.increment() // 먼저 1 증가
      counterService.decrement()

      const count = await firstValueFrom(counterService.getCount())
      expect(count).toBe(0)
    })
  })

  describe('isCountAbove()', () => {
    it('카운트가 임계값 이상이면 true를 반환해야 한다', async () => {
      counterService.increment() // 1로 증가

      const isAbove = await firstValueFrom(counterService.isCountAbove(1))
      expect(isAbove).toBe(true)
    })

    it('카운트가 임계값 미만이면 false를 반환해야 한다', async () => {
      const isAbove = await firstValueFrom(counterService.isCountAbove(1))
      expect(isAbove).toBe(false)
    })
  })
})

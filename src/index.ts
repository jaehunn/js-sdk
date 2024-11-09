import { CounterService } from './service'

class SDK {
  public counterService: CounterService

  constructor() {
    this.counterService = new CounterService()
  }
}

export default SDK

import './api/axios'
import './helper/helper'

// 声明全局类型，使用命名空间，这样可以在任何地方使用类型 而不用引入
declare global {
  namespace IAxios {
    export * from './api/axios'
  }

  namespace IHelper {
    export * from './helper/helper'
  }
}

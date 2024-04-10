# api

本质上由于项目本身是基于 rust 的，且集成在 tauri 上，因此 axios 在环境上来说是不可用的（或者需要配置代理）

目前有两种方案

- 使用 adapter，将 rust 的 http 插件，抹平差异，转化为 axios 的 api 去调用（本质上就是 fetch），对外统一使用暴露的 request 方法。（[社区已经有了](https://github.com/ismailkarsli/axios-tauri-adapter)，但是很遗憾，使用有bug，但是我们可以 fork 其源码然后进行改动！
  
> 参考文档：[https://github.com/axios/axios/tree/v1.x/lib/adapters](https://github.com/axios/axios/tree/v1.x/lib/adapters)

- 编写一个 rust 代理插件，理论上可行，但是我没看到有实践的地方，讲道理成本也有点大
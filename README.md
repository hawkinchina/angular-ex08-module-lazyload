# angular-ex08-module-lazyload

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ex08-module-lazyload)

- 实现配置路由模块懒加载
- 由于模块懒加载特性， 一些人会喜欢把一个组件单独放在一个模块中，然后根模块配置模块的懒加载，来提升应用的性能
- 注意： 动态挂载自定义模块, loadChildren 目前已经更新了， 在 Angular 版本 8 中，loadChildren 路由规范的字符串语法 已弃用，建议改用 import() 语法。
### FrontEnd Summary
#### Vue
slot(插槽)

+  用作父组件传给子组件的Html显示的不同内容, name='xx'指定子组件展示何种插槽
+  作用域插槽, 可以理解为子组件想父组件通讯传值的另外一种方式，通过
```js code
slot-scope="prop" //拿到子组件穿的全部数据
prop[key] // 具体的key参考子组件
```
+ slot 既然可以传html模板,意味着组件同样适合,这也是现在前端组件化的好处在此


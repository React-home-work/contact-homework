## React Homework - Contact Book

### Mockup
用react开发一个Contact Book应用. 应用采用2栏式布局，右侧为导航菜单左侧为菜单项对应的PageView. 第一个菜单项指向登陆页面, 第二个菜单项指向通讯录。

![image](https://github.com/codedoggylicheng/react-homework/blob/master/mockup/1.png)
![image](https://github.com/codedoggylicheng/react-homework/blob/master/mockup/2.png)
![image](https://github.com/codedoggylicheng/react-homework/blob/master/mockup/3.png)

### 要求
- 一个纯前段的SPA
- 可以利用浏览器的前进后退按钮进行历史导航
- 必须登陆后才可以导航到通讯录(用户密码可以hardcoding，然后在前段做简单验证)
- 登陆失败需要进行提示
- 电话簿显示在一个Tab控件内，第一个Tab页显示添加联系的表单，第二个Tab页显示联系人列表
- 联系人列表需要可以根据姓名或电话进行搜索
- 联系人列表采用滚动式懒加载/分页设计，默认第一页最多显示5条记录，每当滚动到底部式再加载下一页
- 尽量考虑组件的重用
- 有针对于react component的测试(选择一个合适的框架)
- 项目结构参考[Feature component](https://git.realestate.com.au/cobra-psw/property-listings-web/wiki/How-to-build-a-new-feature-component)
- 采用ES6标准编写
- 依赖管理
- Webpack打包
- Karma测试管理



## Notes
- 可能用的上的js库，html-webpack-plugin，处理template
- dev server, webpack-dev-server

# NodeBlogs
---
typora-copy-images-to: media
---


>
> 最简易的博客实现方案
> 

# 个人博客实现方案

 
 > 本项目所使用的技术栈

* NodeJS
* Express框架
* MongoDB数据库
* art-template模板引擎

我使用原生的Nodejs搭建了一个简易的后台路由。封装了一些业务功能，也抽离了一些数据模型，使用的富文编辑器是CKeditor5表示目前用着不顺手，正在琢磨中。

# 目前实现的功能模块

目标：

* 主页：
  - 博客文章简略介绍
  - 图文加载
  - 主页数据分页显示
  - 主页博文详情展示
  - 文章详情评论
* 管理页：
  - 用户管理功能的实现 
    - 用户添加 删除 编辑操作
    - 采用加密算法，进行密码校验
    - 实现了数据分页展示功能
  - 文章管理功能的实现
    - 文章的添加 删除 编辑操作
    - 实现了图片上传预览功能
    - 实现了数据分页展示功能
    

# 待实现的功能模块

目标：

* 主页：
  - 博文分类统计页面
  - 随机推荐文章页面
  - 文章搜索
  - 文章评论审批
  - 用户注册功能
  
* 管理页：
  - 实现向普通用户开放的博文工作台
  - 完事富文编辑器功能

* 性能优化问题说明：
  - 这里我不适用Webpack进行打包压缩调整性能，因为本项目旨在锻炼nodeJS和加强js基本功，要做一个网站的网站，请选择一个优秀的框架来进行开发
  


# 核心代码片段说明
> express框架是一个应用与Nodejs进行web应用开发的框架，使用它可以很方便的开发web应用服务
> 
> 使用模块化的方式开发路由功能
> 
> 注意这里使用的是Art-template模板，你需要需要掌握它的模板语法，这有助于你理解此项目
> 对密码的加密模块，我们使用的是bcryptjs第三方模块，你也许需要安装Python开发环境，并且去配置它

```html
bcrypt依赖的其他环境
1. python 2.x
2. node-gyp
    npm install -g node-gyp
3. windows-build-tools
     npm install --global --production windows-build-tools@5.0.0

```
```javascript
//这里我们是哟了formidable第三方插件。以下是基本的用法
 // 引入formidable模块
 const formidable = require('formidable');
 // 创建表单解析对象
 const form = new formidable.IncomingForm();
 // 设置文件上传路径
 form.uploadDir = "/my/dir";
 // 是否保留表单上传文件的扩展名
 form.keepExtensions = false;
 // 对表单进行解析
 form.parse(req, (err, fields, files) => {
     // fields 存储普通请求参数
         // files 存储上传的文件信息
 });

```


**项目说明：**

 这个是一个简略的实验项目。不是一个实际开发的项目，请你拿他练手，以便于你巩固和加强，代码基本功

 **有问题请联系我：qq:861795660**






const { Article } = require('../../model/article')

module.exports = async(req, res) => {

    // 标识 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'article';

    // 获取到地址栏中的id参数
    const { message, id } = req.query;
    // 修改操作
    let articles = await Article.findOne({ _id: id });

    // res.send(rticles);
    // 渲染用户编辑页面(修改)
    res.render('admin/article-modify', {
        article: articles
    });



}
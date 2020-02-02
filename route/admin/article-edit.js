const { Article } = require('../../model/article')
const { User } = require('../../model/user');


module.exports = async(req, res) => {



    // 获取到地址栏中的id参数
    const { id } = req.query;
    // res.send(req.query);
    // console.log(id);
    // 如果当前传递了id参数
    if (id) {
        // 修改操作
        let article = await Article.findOne({ _id: id });
        // 渲染用户编辑页面(修改
        // res.send(article);
        let a = article.author;

        let articleU = await User.findOne({ _id: a });
        res.render('admin/article-modify', {
            article: article,
            articleU: articleU,
        });
    } else {
        // 添加操作
        res.render('admin/article-edit');

    }

}
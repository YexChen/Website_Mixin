var express = require('express')
var router = express.Router()
let pc = require(__dirname+'/pcRouter')

/*主页*/
router.get('/',pc.renderIndex)
// 商品详情页
router.get('/goods',pc.renderGoods)
// 登陆页面
router.get('/login',pc.renderLogin)
// 注册窗口
router.get('/register',pc.renderRegist)
// 购物车页面
router.get('/shoppingcar',pc.renderShopping)
// 支付页面
router.get('/chart',pc.renderChart)
// 商品列表页面
router.get('/list',pc.renderList)
// 订单页面
router.get('/order',pc.renderOrder)

module.exports = router

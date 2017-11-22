
exports.renderIndex = function(req,res,next){
  res.render('pc/index')
}

exports.renderGoods = function(req,res,next){
  res.render('pc/goods')
}

exports.renderLogin = function(req,res,next){
  res.render('pc/login')
}

exports.renderRegist = function(req,res,next){
  res.render('pc/register')
}

exports.renderShopping = function(req,res,next){
  res.render('pc/shoppingcar')
}

exports.renderChart = function(req,res,next){
  res.render('pc/chart')
}

exports.renderList = function(req,res,next){
  res.render('pc/list')
}

exports.renderOrder = function(req,res,next){
  res.render('pc/order')
}

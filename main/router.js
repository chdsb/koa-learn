const router = require('koa-router')();

// const printf = require("../tool/help").printf

//总路由，具体模块导入到apps里
router.use('/log', require('../apps/api/routes').routes());

module.exports = router

// const printf = require("../../tool/help").printf

const router = require('koa-router')();
const view = require('./views')

router.get('/login', view.login)
router.get('/logout', view.logout)
router.get('/check', view.check)
router.get('/', async ctx => {
    ctx.body = ctx.url;
});


module.exports = router

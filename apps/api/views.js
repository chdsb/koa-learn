const {printf} = require("../../tool/help");
const interceptor = require("../../main/interceptor")

async function login(ctx, next) {
    ctx.session.login = true
    ctx.body = "登录成功"
}

async function logout(ctx, next) {
    ctx.session = null
    ctx.body = "退出登录成功"
}

async function check(ctx, next) {
    interceptor.check_login(ctx, next, () => {
        ctx.body = "this is login page"
    })
}

module.exports = {
    login,
    check,
    logout
}

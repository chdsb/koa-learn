const {printf} = require("../tool/help");

async function check_login(ctx, next, success, fail = () => {
}) {
    if (ctx.session.login == true) {
        printf("已登录")
        success()
    } else {
        printf("没有登录")
        fail()
        ctx.body = '没有登录'
    }
}

module.exports = {
    check_login
}

import { Next } from 'koa';
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../app/app.config')
const { TokenExpiredError, JsonWebTokenError } = require('./auth.ErrorMessage')
/**
 * 身份认证
 */
const auth = async (ctx: any, next: Next) => {
    const { authorization } = ctx.request.header
    const token = authorization.replace('Bearer ', '')

    try {
        // 验证token
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
        // console.log(user)
    } catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.error('token已过期', err);
                return ctx.app.emit('error', TokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('无效的token', err);
                return ctx.app.emit('error', JsonWebTokenError, ctx)
        }
    }
    await next() 
}

/**
 * 修改密码
 */

module.exports = {
    auth
}

const { register, login, changePassword } = require('./user.controller')
const UserRouter = require('koa-router')
const router = new UserRouter({ prefix: '/users' })
const { auth } = require('../auth/auth.middleware')
const {
    userValidator,
    checkUserExist,
    encryptPassword,
    verifyLogin,
    checkPassword
} = require('./user.middleware')
/**
 * 注册接口
 */
router.post('/register', userValidator, checkUserExist, encryptPassword, register)

/**
 * 登录接口
 */
router.post('/login', userValidator, verifyLogin, login)
/**
 * 修改密码接口
 */
router.patch('/', auth,checkPassword, encryptPassword, changePassword)






module.exports = router

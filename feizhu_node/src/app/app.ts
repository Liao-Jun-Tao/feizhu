const Koa = require('koa');
const Router= require('../user/user.router')
const {koaBody } = require('koa-body')
const  errHandler = require('./app.middleware')
import { Context, Next } from "koa";
const app = new Koa()

app.use(koaBody())
/**
 * 启用路由
 */
app.use( Router.routes())
/**
 * 监听错误
 */
app.on('error', errHandler)


module.exports = app
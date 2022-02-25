var express = require('express');
var router = express.Router();
let {register,login} = require('../controller/users');

/* GET users listing. */
router.post('/', register);
router.get('/', login);

module.exports = router;

/* 
打开网址->注册界面(有直接登录选项)->注册成功/直接登录，返回登录界面->
          按钮触发axios将信息post到后端     按钮触发axios将信息get到后端
*/

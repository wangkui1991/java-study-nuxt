export default [
    {
        name: 'login',
        method: 'POST',
        desc: '登录',
        path: '/user/user/login'
    },
    {
        name: 'register',
        method: 'POST',
        desc: '注册',
        path: '/user/user/register'
    },
    {
        name: 'sendEmail',
        method: 'POST',
        desc: '发送激活邮件',
        path: '/user/user/register/sendEmail'
    },
    {
        name: 'registerActive',
        method: 'POST',
        desc: '激活',
        path: '/user/user/register/activation'
    },
    {
        name: 'findUserByToken',
        method: 'POST',
        desc: '获取用户信息',
        path: '/user/user/login/findUserByToken'
    },
    {
        name: 'userAuth',
        method: 'POST',
        desc: '用户认证',
        path: '/user/user/userAuth'
    }
];

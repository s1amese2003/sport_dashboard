// 登录表单的验证函数
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    // 获取用户输入的用户名和密码
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // 清空错误信息
    errorMessage.textContent = '';

    // 简单的用户名和密码验证（可以扩展为更复杂的验证逻辑）
    if (username === '' || password === '') {
        errorMessage.textContent = '用户名和密码不能为空！';
        return;
    }

    // 示例：验证用户名和密码（假设用户名是 "admin"，密码是 "123456"）
    if (username === 'admin' && password === '123456') {
        // 登录成功，保存登录状态
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);

        // 隐藏登录框，显示运动管家内容
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
        document.getElementById('go-to-activity').click(); // 默认打开运动信息页面
    } else {
        errorMessage.textContent = '用户名或密码错误！';
    }
});

// 页面加载时检查登录状态
window.addEventListener('load', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
    }
});

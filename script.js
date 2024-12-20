// 切换到运动信息页面
document.getElementById('go-to-activity').addEventListener('click', function() {
    document.getElementById('activity-info').style.display = 'block';
    document.getElementById('community-forum').style.display = 'none';
});

// 切换到社区论坛页面
document.getElementById('go-to-forum').addEventListener('click', function() {
    document.getElementById('activity-info').style.display = 'none';
    document.getElementById('community-forum').style.display = 'block';
});

// 退出登录
document.getElementById('logout').addEventListener('click', function() {
    // 清除登录状态
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');

    // 隐藏运动管家界面，显示登录模态框
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-modal').style.display = 'block';
});

// 更新步数和卡路里消耗数据
function updateActivityData() {
    const stepGoal = 10000; // 设定目标步数
    let currentSteps = Math.floor(Math.random() * stepGoal); // 随机生成当前步数
    let caloriesBurned = Math.floor(currentSteps * 0.04); // 假设每步消耗0.04卡路里

    // 更新页面上的显示内容
    document.getElementById('step-progress').value = currentSteps;
    document.getElementById('step-goal').innerText = stepGoal;
    document.getElementById('calories-burned').innerText = caloriesBurned;
    document.getElementById('heart-rate').innerText = Math.floor(Math.random() * 40 + 60); // 随机生成心率
}

// 每隔5秒更新一次数据
setInterval(updateActivityData, 5000);

// 初始化页面时立即更新一次数据
updateActivityData();

// 模拟加载社区论坛帖子
function loadForumPosts() {
    const posts = [
        { title: "今天跑步了10公里，感觉不错！", user: "小明" },
        { title: "如何增加跑步速度？大家有经验吗？", user: "小李" },
        { title: "今天运动了3小时，感觉筋疲力尽，如何恢复？", user: "小王" }
    ];

    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; // 清空现有帖子

    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${post.title}</a> - <small>by ${post.user}</small>`;
        postList.appendChild(li);
    });
}

// 加载社区帖子
loadForumPosts();

// 模拟体感检测，生成疲劳度值
function updateBodySensing() {
    const fatigueLevels = ['低', '中', '高'];
    const randomIndex = Math.floor(Math.random() * fatigueLevels.length);
    const currentFatigueLevel = fatigueLevels[randomIndex];

    // 更新页面上的疲劳度
    document.getElementById('fatigue-level').innerText = currentFatigueLevel;
}

// 每隔10秒更新一次体感检测
setInterval(updateBodySensing, 10000);

// 初始化页面时立即更新一次体感检测
updateBodySensing();

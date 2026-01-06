# 页面操作流程描述 (Use Flow)

## 1. 核心场景：浏览与筛选课程
**描述**：用户进入门户，通过侧边栏切换分类来查找特定的 RPA 教学视频。

### 操作步骤
1. **访问首页**：用户打开应用，默认展示“基本命令”分类。
2. **切换分类**：用户点击左侧侧边栏中的“鼠标键盘操作”。
3. **查看结果**：右侧课程区域实时刷新，展示相关课程卡片。

### 关键元素 XPath
- **侧边栏分类项 (基本命令)**: `//aside//button[contains(text(), 'UiBot 6.0-基本命令')]`
- **侧边栏分类项 (产品功能)**: `//aside//button[contains(text(), 'UiBot 6.0-产品功能')]`
- **课程区域标题**: `//main//h2`
- **首个课程卡片**: `//main//div[contains(@class, 'grid')]/div[1]`

---

## 2. 核心场景：使用 AI 智能助教咨询
**描述**：用户在学习过程中遇到技术难题，通过浮动聊天窗口咨询 AI。

### 操作步骤
1. **打开聊天框**：点击页面右下角的蓝色气泡图标。
2. **输入问题**：在输入框键入“如何安装 UiBot 扩展？”。
3. **发送消息**：按回车键或点击发送图标。
4. **获取回答**：等待 AI 生成回复并展示。

### 关键元素 XPath
- **聊天机器人开关按钮**: `//button[contains(@class, 'fixed') and .//svg]`
- **聊天输入框**: `//input[@placeholder='询问关于 RPA 的问题...']`
- **发送按钮**: `//button[.//svg and contains(@class, 'bg-indigo-600')]`
- **AI 最新回复内容**: `(//div[contains(@class, 'bg-white') and contains(@class, 'rounded-tl-none')])[last()]`

# 项目目录结构与文件说明 (File Descriptions)

## 1. 目录结构树
```text
.
├── App.tsx                 # 应用核心布局与状态管理
├── index.tsx               # React 渲染入口
├── index.html              # HTML 模板，包含 Tailwind 与 Google Fonts
├── types.ts                # 全局 TypeScript 接口定义
├── data.ts                 # 静态模拟数据（分类、课程）
├── metadata.json           # 应用元数据及权限配置
├── components/
│   ├── CourseCard.tsx      # 课程卡片 UI 组件
│   └── ChatBot.tsx         # AI 智能助教悬浮窗组件
├── services/
│   └── geminiService.ts    # Google Gemini API 交互逻辑
└── docs/
    ├── PRD.md              # 产品需求文档
    ├── backend_interface.md # 后端 API 规范
    ├── use_flow.md         # 页面操作流程与 XPath
    ├── auto_test.md        # 自动化测试规范
    └── files_desc.md       # 目录文件说明 (当前文件)
```

## 2. 文件简介
- **`App.tsx`**: 整个门户的“大脑”，负责左侧侧边栏与右侧内容区的联动。
- **`data.ts`**: 充当临时“数据库”，存储了当前所有的 RPA 课程信息和分类信息。
- **`geminiService.ts`**: 封装了 AI 调用的核心逻辑，包括系统提示词 (System Instruction) 的设定。
- **`CourseCard.tsx`**: 视觉核心，使用了复杂的 CSS 渐变和伪元素来模拟 UI 效果图中精美的卡片设计。
- **`ChatBot.tsx`**: 包含完整的交互逻辑，支持自动滚动、加载动画和响应式适配。

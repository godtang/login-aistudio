# 后端接口定义文档 (API Specification)

## 1. 基础信息
- **Base URL**: `https://api.rpa-academy.com/v1`
- **Content-Type**: `application/json`
- **认证方式**: `Authorization: Bearer <token>`

## 2. 接口列表

### 2.1 获取分类列表
- **接口地址**: `GET /categories`
- **功能说明**: 获取侧边栏所有课程分类。
- **返回值**:
  ```json
  {
    "code": 200,
    "data": [
      { "id": "features", "name": "UiBot 6.0-产品功能" },
      { "id": "commands", "name": "UiBot 6.0-基本命令" }
    ]
  }
  ```

### 2.2 获取课程列表
- **接口地址**: `GET /courses`
- **参数**: 
  - `categoryId` (query, string): 分类 ID
  - `page` (query, number): 页码
  - `pageSize` (query, number): 每页数量
- **返回值**:
  ```json
  {
    "code": 200,
    "data": {
      "list": [
        {
          "id": "f1",
          "title": "产品功能-UiBot Creator功能介绍",
          "duration": "12:45",
          "thumbnail": "...",
          "description": "..."
        }
      ],
      "total": 100
    }
  }
  ```

### 2.3 AI 对话接口 (Proxy)
- **接口地址**: `POST /ai/chat`
- **功能说明**: 转发请求至 Gemini API，并记录对话日志。
- **请求体**:
  ```json
  {
    "message": "如何使用 UiBot 读取 Excel？",
    "history": [
      { "role": "user", "text": "你好" },
      { "role": "model", "text": "你好，我是 RPA 助教。" }
    ]
  }
  ```
- **返回值**:
  ```json
  {
    "code": 200,
    "data": {
      "response": "你可以使用『读取区域』命令...",
      "msgId": "chat_88921"
    }
  }
  ```

## 3. 数据持久化说明

### 3.1 数据库建议
- **关系型数据库 (PostgreSQL/MySQL)**：
  - `courses` 表：存储课程元数据、所属分类、时长等。
  - `categories` 表：存储分类层级。
  - `users` 表：存储账户信息、学习进度。
- **文档型数据库 (MongoDB)**：
  - `chat_logs` 集合：存储用户与 AI 的完整对话历史，方便后续分析和微调。

### 3.2 缓存
- 使用 **Redis** 缓存 `categories` 和高频访问的 `courses` 列表，提升首屏渲染速度。

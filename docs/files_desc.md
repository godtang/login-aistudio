
# 项目目录结构与文件说明 (File Descriptions)

## 1. 核心代码
- **`App.tsx`**: **[动态核心]** 负责监听分类状态变化并触发异步数据请求，管理全局 Loading 逻辑。
- **`components/CourseCard.tsx`**: **[动态 UI]** 接收外部传入的分类名称，实现 UI 与数据的解耦。
- **`services/courseService.ts`**: **[中间件]** 模拟真实的 Fetch API 行为，包含异步 Promise 封装和网络延迟模拟。

## 2. 静态数据
- **`data.ts`**: 作为项目的“Mock 数据库”，存储原始的 JSON 结构数据。

## 3. 文档体系 (Updated)
- **`PRD.md`**: 记录了“数据驱动”和“反馈优先”的设计理念。
- **`backend_interface.md`**: 定义了伪接口的入参和出参。
- **`use_flow.md`**: 详细描述了从骨架屏到真实内容的转换过程。
- **`auto_test.md`**: 提供了针对动态加载过程的测试建议。

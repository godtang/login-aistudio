
# 后端接口定义文档 (API Specification)

## 1. 基础信息
- **Base URL**: `Mock Environment`
- **数据流向**: `Data.ts` -> `courseService.ts` -> `App.tsx`

## 2. 接口列表

### 2.1 获取分类列表
- **接口地址**: `GET /categories`
- **Mock 延迟**: 600ms
- **返回值结构**: `Category[]` (见 `types.ts`)

### 2.2 获取分类下的课程
- **接口地址**: `GET /courses`
- **参数**: `categoryId` (必填)
- **Mock 延迟**: 400ms
- **交互逻辑**: 
  - 调用时前端应立即清空现有课程状态。
  - 接口根据 `categoryId` 过滤 `data.ts` 中的全局课程数组。
- **返回值结构**: `VideoCourse[]`

### 2.3 AI 助教
- **接口地址**: `Gemini API`
- **系统提示词**: 设定为 "专业 RPA 助教"，专注 UiBot 6.0 知识体系。

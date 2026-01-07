
# 后端接口定义与切换指南

## 1. 如何从 Mock 切换到真实后端
当你完成 Python (FastAPI/Flask) 代码编写后：
1. 打开 `config.ts`。
2. 将 `USE_MOCK` 修改为 `false`。
3. 确保 `API_BASE_URL` 指向你的 Python 服务器地址。

## 2. 推荐的 Python 后端实现 (示例)
建议使用 FastAPI，因为它能自动生成符合前端预期的 JSON 格式。

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 必须配置 CORS，否则前端浏览器会拦截请求
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/categories")
async def get_categories():
    return [
        {"id": "features", "name": "UiBot 6.0-产品功能"},
        # ... 更多分类
    ]

@app.get("/api/courses")
async def get_courses(categoryId: str):
    # 根据 categoryId 过滤并返回课程列表
    return [
        {"id": "f1", "category": "features", "title": "Python 后端返回的课程", "duration": "10:00"}
    ]
```

## 3. 常见问题
- **404 错误**: 请检查 `config.ts` 中的 `API_BASE_URL` 是否漏掉了 `/api` 前缀。
- **CORS 错误**: 必须在 Python 代码中启用 `CORS` 中间件，否则本地请求会被浏览器拦截。

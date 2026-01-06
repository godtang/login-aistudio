# 后端 API 自动化测试规范 (Auto Test)

## 1. 测试框架建议
- **工具**: Jest + Supertest (Node.js) 或 PyTest + Requests (Python)
- **环境**: 集成测试环境 (CI/CD Pipeline)

## 2. 测试用例定义

### 2.1 分类接口测试 (`GET /categories`)
- **TC-001**: 验证接口返回状态码为 200。
- **TC-002**: 验证返回数据为数组，且每个对象包含 `id` 和 `name`。
- **TC-003**: 验证响应时间小于 500ms。

### 2.2 课程列表接口测试 (`GET /courses`)
- **TC-101**: 传入合法 `categoryId` (如 `features`)，验证返回对应的课程列表。
- **TC-102**: 传入不存在的 `categoryId`，验证返回空列表或 404 提示。
- **TC-103**: 验证分页逻辑，检查 `total` 字段与实际列表长度的关系。

### 2.3 AI 对话接口测试 (`POST /ai/chat`)
- **TC-201**: 发送标准文本，验证返回 JSON 包含 `response` 字符串。
- **TC-202**: 验证异常流（如空消息），接口应返回 400 状态码。
- **TC-203**: 并发测试，验证在多用户请求下 API 的稳定性。

## 3. 自动化测试脚本示例 (Pseudo-code)
```javascript
describe('RPA Academy API Tests', () => {
  test('Should fetch categories successfully', async () => {
    const res = await request(app).get('/v1/categories');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('Should get courses for specific category', async () => {
    const res = await request(app).get('/v1/courses?categoryId=commands');
    expect(res.status).toBe(200);
    expect(res.body.data.list[0].title).toContain('基本命令');
  });
});
```


/**
 * 全局应用配置
 */
export const CONFIG = {
  // 是否启用 Mock 数据。设置为 false 时将尝试调用真实的 API。
  USE_MOCK: true,
  
  // 你的 Python 后端地址 (例如 Flask, FastAPI 或 Django 的本地运行地址)
  API_BASE_URL: 'http://127.0.0.1:8000/api',
  
  // 模拟网络延迟时间 (仅在 USE_MOCK 为 true 时有效)
  MOCK_DELAY: {
    CATEGORIES: 600,
    COURSES: 400
  }
};

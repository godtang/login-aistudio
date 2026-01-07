
import { CATEGORIES, COURSES } from '../data.ts';
import { Category, VideoCourse } from '../types.ts';
import { CONFIG } from '../config.ts';

/**
 * 通用的 fetch 包装器，支持错误处理
 */
async function apiFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${CONFIG.API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * 获取分类列表
 * 支持从本地 Mock 或 远程 Python 后端获取
 */
export const fetchCategories = async (): Promise<Category[]> => {
  if (CONFIG.USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(CATEGORIES);
      }, CONFIG.MOCK_DELAY.CATEGORIES);
    });
  }

  // 真实请求路径: GET /api/categories
  return apiFetch<Category[]>('/categories');
};

/**
 * 获取指定分类下的课程
 * 支持从本地 Mock 或 远程 Python 后端获取
 */
export const fetchCoursesByCategory = async (categoryId: string): Promise<VideoCourse[]> => {
  if (CONFIG.USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = COURSES.filter(c => c.category === categoryId);
        resolve(filtered);
      }, CONFIG.MOCK_DELAY.COURSES);
    });
  }

  // 真实请求路径: GET /api/courses?categoryId=xxx
  return apiFetch<VideoCourse[]>(`/courses?categoryId=${categoryId}`);
};

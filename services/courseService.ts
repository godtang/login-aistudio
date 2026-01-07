
import { CATEGORIES, COURSES } from '../data.ts';
import { Category, VideoCourse } from '../types.ts';

/**
 * Mocking an API call to fetch categories.
 * In a real app, this would be: fetch('https://api.rpa-academy.com/v1/categories')
 */
export const fetchCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(CATEGORIES);
    }, 600);
  });
};

/**
 * Mocking an API call to fetch courses by category ID.
 */
export const fetchCoursesByCategory = async (categoryId: string): Promise<VideoCourse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = COURSES.filter(c => c.category === categoryId);
      resolve(filtered);
    }, 400);
  });
};

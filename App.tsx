
import React, { useState, useEffect } from 'react';
import { Category, VideoCourse } from './types.ts';
import { fetchCategories, fetchCoursesByCategory } from './services/courseService.ts';
import CourseCard from './components/CourseCard.tsx';
import ChatBot from './components/ChatBot.tsx';

const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [courses, setCourses] = useState<VideoCourse[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isCoursesLoading, setIsCoursesLoading] = useState(false);

  // Initial fetch of categories
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        if (data.length > 0) {
          // Set default active category to 'commands' if it exists, else the first one
          const defaultCat = data.find(c => c.id === 'commands') || data[0];
          setActiveCategory(defaultCat.id);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setIsCategoriesLoading(false);
      }
    };
    loadCategories();
  }, []);

  // Fetch courses whenever the active category changes
  useEffect(() => {
    if (!activeCategory) return;

    const loadCourses = async () => {
      setIsCoursesLoading(true);
      // IMPORTANT: Clear the current list immediately so the user sees the skeleton loader
      // and knows a new request is being made to the mock interface.
      setCourses([]); 
      
      try {
        const data = await fetchCoursesByCategory(activeCategory);
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setIsCoursesLoading(false);
      }
    };
    loadCourses();
  }, [activeCategory]);

  const activeCategoryName = categories.find(cat => cat.id === activeCategory)?.name || "";

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f2f5]">
      {/* Top Header */}
      <header className="bg-black text-white px-4 md:px-8 h-16 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-400 w-8 h-8 rounded-sm flex items-center justify-center text-black font-black text-xl">来</div>
            <div className="flex items-center">
               <span className="font-bold text-lg">RPA 培训</span>
               <svg className="w-4 h-4 ml-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center h-full">
            <a href="#" className="px-6 py-5 text-sm hover:text-white transition-colors">首页</a>
            <a href="#" className="px-6 py-5 text-sm bg-indigo-900 border-b-2 border-indigo-500 text-white">教学视频</a>
            <a href="#" className="px-6 py-5 text-sm text-gray-400 hover:text-white transition-colors">认证考试</a>
            <a href="#" className="px-6 py-5 text-sm text-gray-400 hover:text-white transition-colors">开发指南</a>
            <a href="#" className="px-6 py-5 text-sm text-gray-400 hover:text-white transition-colors">命令手册</a>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded text-sm font-medium transition-colors">注册</button>
            <button className="border border-white/40 text-white px-5 py-1.5 rounded text-sm font-medium hover:bg-white/10 transition-colors">登录</button>
          </div>
          <div className="hidden xl:block text-xs text-gray-400 whitespace-nowrap">
            定制热线: <span className="text-white font-medium ml-1">400-001-8136</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full p-4 lg:p-6 gap-6">
        
        {/* Left Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white rounded border border-gray-200 overflow-hidden sticky top-24">
            <div className="bg-gray-50 px-5 py-4 border-b border-gray-100 flex items-center space-x-2 text-blue-600 font-bold text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <span>教学分类</span>
            </div>
            <nav className="py-2 min-h-[100px]">
              {isCategoriesLoading ? (
                <div className="p-6 space-y-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
                  ))}
                </div>
              ) : (
                categories.map(cat => (
                  <button
                    key={cat.id}
                    disabled={isCoursesLoading}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-6 py-2.5 text-sm transition-all border-r-4 ${
                      activeCategory === cat.id 
                        ? 'bg-blue-50 text-blue-600 font-semibold border-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50 border-transparent'
                    } ${isCoursesLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {cat.name}
                  </button>
                ))
              )}
            </nav>
          </div>
        </aside>

        {/* Right Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded shadow-sm p-8 min-h-[700px]">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-1 h-6 bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                {isCategoriesLoading ? <span className="bg-gray-100 h-8 w-48 block animate-pulse rounded"></span> : activeCategoryName}
              </h2>
            </div>

            {isCoursesLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in duration-300">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="flex flex-col space-y-2">
                    <div className="aspect-[16/9] bg-gray-100 rounded animate-pulse border border-gray-100"></div>
                    <div className="h-10 bg-gray-100 rounded animate-pulse w-full"></div>
                  </div>
                ))}
              </div>
            ) : courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {courses.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    categoryName={activeCategoryName}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 text-gray-400">
                <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <p>该分类下暂无视频课程</p>
                <button 
                  onClick={() => setActiveCategory('commands')}
                  className="mt-4 text-blue-600 text-sm hover:underline"
                >
                  返回主修课程
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 px-4 mt-auto">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center text-gray-400 text-xs text-center">
          <p className="mb-4">© 2024 来也科技 (Laiye) - RPA 开发者学习门户. 京ICP备16029304号-4</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">服务协议</a>
            <a href="#" className="hover:text-gray-600 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-600 transition-colors">关于我们</a>
            <a href="#" className="hover:text-gray-600 transition-colors">联系我们</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default App;

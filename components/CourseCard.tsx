
import React from 'react';
import { VideoCourse } from '../types.ts';

interface CourseCardProps {
  course: VideoCourse;
  categoryName: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, categoryName }) => {
  return (
    <div className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#4e4dfb] via-[#3b34c0] to-[#252086] flex flex-col items-center justify-center">
        {/* "6.0" Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
          <span className="text-white text-8xl font-black italic tracking-tighter">6.0</span>
        </div>

        {/* Top Left Label */}
        <div className="absolute top-3 left-4 flex flex-col">
          <span className="text-white text-base font-bold tracking-tight tracking-wide">UiBot 6.0 课程</span>
          <span className="text-white/60 text-[10px] mt-0.5 uppercase tracking-widest">Training Course</span>
        </div>

        {/* Right Corner Badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 w-5 h-5 rounded-sm flex items-center justify-center">
          <span className="text-black font-black text-[10px]">来</span>
        </div>

        {/* Center Monitor Icon */}
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Bottom Left Dynamic Label */}
        <div className="absolute bottom-3 left-4">
          <span className="text-white text-xs font-medium opacity-90 px-2 py-0.5 bg-white/10 rounded backdrop-blur-sm">
            {categoryName.replace('UiBot 6.0-', '')}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
          {course.duration}
        </div>
      </div>
      
      {/* Title Bar */}
      <div className="py-4 px-4 bg-[#1f1e5a] text-white flex items-center justify-center text-center flex-grow">
        <h3 className="text-sm font-medium tracking-wide line-clamp-2">
          {course.title}
        </h3>
      </div>
    </div>
  );
};

export default CourseCard;

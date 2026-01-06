
import React from 'react';
import { VideoCourse } from '../types.ts';

interface CourseCardProps {
  course: VideoCourse;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#4e4dfb] via-[#3b34c0] to-[#252086] flex flex-col items-center justify-center">
        {/* "6.0" Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
          <span className="text-white text-8xl font-black italic tracking-tighter">6.0</span>
        </div>

        {/* Top Left Label */}
        <div className="absolute top-3 left-4 flex flex-col">
          <span className="text-white text-base font-bold tracking-tight">UiBot 6.0 课程</span>
          <span className="text-white/60 text-[10px] mt-0.5">来也科技培训课程</span>
        </div>

        {/* Right Corner Badge (Mini Yellow Logo Icon Mockup) */}
        <div className="absolute top-2 right-2 bg-yellow-400 w-5 h-5 rounded-sm flex items-center justify-center">
          <span className="text-black font-black text-[10px]">来</span>
        </div>

        {/* Center Monitor Icon */}
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-3 left-4">
          <span className="text-white text-xs font-medium opacity-90">基本命令</span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/40 text-white text-[10px] px-1 rounded backdrop-blur-sm">
          {course.duration}
        </div>
      </div>
      
      {/* Title Bar */}
      <div className="py-3 px-4 bg-[#1f1e5a] text-white flex items-center justify-center text-center">
        <h3 className="text-sm font-medium tracking-wide truncate">
          {course.title}
        </h3>
      </div>
    </div>
  );
};

export default CourseCard;

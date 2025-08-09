import React from 'react';
import { Loader2, BookOpen } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center">
            <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
          </div>
          <Loader2 className="w-16 h-16 lg:w-20 lg:h-20 text-green-600 animate-spin absolute -inset-2 duration-700" />
        </div>
        <div className="text-center space-y-1">
          <h3 className="text-base lg:text-lg font-semibold text-gray-900">Grovvest Academy</h3>
          <p className="text-xs lg:text-sm text-gray-600">Loading your learning journey...</p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

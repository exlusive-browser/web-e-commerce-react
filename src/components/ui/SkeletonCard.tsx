// SkeletonCard.tsx
import React from "react";

const SkeletonCard: React.FC = () => (
  <div className="border rounded-lg p-5 shadow-lg animate-pulse">
    <div className="bg-gray-300 h-48 mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-1/3 mb-1"></div>
    <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-full"></div>
  </div>
);

export default SkeletonCard;
// ErrorMessage.tsx
import React from "react";

const ErrorMessage: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-96">
    <div className="animate-bounce mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-red-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="rgba(255, 0, 0, 0.1)" />
        <path d="M12 8v4m0 2h0" stroke="red" />
        <circle cx="12" cy="16" r="1" fill="red" />
      </svg>
    </div>
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-red-500">Failed to load products</h2>
      <p className="text-gray-500">Please try again later.</p>
    </div>
  </div>
);

export default ErrorMessage;
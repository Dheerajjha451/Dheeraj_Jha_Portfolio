import React from 'react';

export default function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <h1 className='text-4xl font-bold leading-tight relative group'>
        {text}
        <span className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
      </h1>
    </div>
  );
}

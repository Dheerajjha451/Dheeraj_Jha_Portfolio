import React from 'react'
export default function Footer () {
    return (
      <footer className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Dheeraj Jha. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  
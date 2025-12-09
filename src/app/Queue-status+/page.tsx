'use client';

import { useEffect, useState } from 'react';

export default function QueueStatus() {
  const [position, setPosition] = useState(5);
  const [status, setStatus] = useState<'waiting' | 'called'>('waiting');

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPos = prev > 1 ? prev - 1 : 1;
        if (newPos === 1) setStatus('called');
        return newPos;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto mt-12 bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Queue Status</h1>
        
        {status === 'called' && (
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6 animate-pulse">
            <p className="text-green-800 font-bold">🔔 You are being called!</p>
          </div>
        )}

        <div className="text-center py-8">
          <p className="text-gray-600 mb-2">Your Position</p>
          <div className="text-6xl font-bold text-blue-600">{position}</div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Live updates</span>
        </div>
      </div>
    </div>
  );
}

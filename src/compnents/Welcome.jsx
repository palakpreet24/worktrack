import React from 'react';

export default function Welcome() {
  return (
    <div className="bg-purple-100 rounded-lg shadow-md p-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-purple-900">Hello Palak👋</h1>
        <p className="text-sm text-purple-700">You can manage your things from here</p>
      </div>
      <div className="ml-4 text-purple-900 text-4xl font-bold">
        Welcome
      </div>
    </div>
  );
}

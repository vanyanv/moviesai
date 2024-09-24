import React from 'react';

export default function page() {
  return (
    <div>
      <h1 className='text-3xl text-gray-800 mb-5'>AI Chat for Movies</h1>
      <div className='w-full max-w-md mx-auto'>
        <div className='bg-gray-100 p-4 rounded-lg shadow-md mb-4'>
          <div className='flex flex-col space-y-2'>
            <div className='bg-white p-2 rounded-lg shadow-sm'>
              <p className='text-gray-800'>
                Hello! How can I help you with movies today?
              </p>
            </div>
            {/* User messages will go here */}
          </div>
        </div>
        <form className='flex space-x-2'>
          <input
            type='text'
            className='flex-1 p-2 border border-gray-300 rounded-lg text-black'
            placeholder='Type your message...'
          />
          <button
            type='submit'
            className='p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

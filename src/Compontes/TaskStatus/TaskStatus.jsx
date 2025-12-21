import React from 'react';

const TaskStatus = ({ history, handleResolved }) => {
  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      {history.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full sm:w-[360px] text-center">
          <h2 className="text-sm font-medium text-gray-900 mb-2">
            Select a ticket to add to Task Status
          </h2>
          
        </div>
      ) : (
        history.map((title, index) => (
          <div
            key={index}
            className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-gray-200 w-full sm:w-[360px] hover:shadow-lg transition duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5 text-center">
              {title}
            </h2>
            <button
              onClick={() => handleResolved(title)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 sm:py-3 px-5 rounded-md w-full transition duration-200"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;

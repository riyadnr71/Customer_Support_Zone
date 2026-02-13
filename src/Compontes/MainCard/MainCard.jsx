import React from 'react';
import { toast } from 'react-toastify';

const MainCard = ({ data, setToggle, handleComplete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {data.map((customer) => (
        <div
          key={customer.id}
          onClick={() => {
            handleComplete(customer.title);
            setToggle(false);
            toast.success('Added to Task Status');
          }}
          className="cursor-pointer"
        >
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 w-full border border-gray-200 hover:shadow-lg transition duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {customer.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {customer.status}
              </div>
            </div>

            {/* Description */}
            
            <p className="text-sm text-gray-600 mb-4">{customer.description}</p>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end text-xs text-gray-500 gap-2">
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-800">#{customer.id || '1001'}</span>
                <span className="font-medium text-red-600">{customer.priority}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">{customer.customer}</span>
                <span className="text-gray-400">{customer.createdAt}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCard;

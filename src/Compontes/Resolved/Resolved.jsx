import React from "react";

const Resolved = ({ resolved }) => {
  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      {resolved.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full sm:w-[360px] text-center">
          <h2 className="text-sm font-medium text-gray-900 mb-2">
            Select a ticket to add to Task Status
          </h2>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full sm:w-[360px]">
          {/* Header */}
          <h2 className="text-sm font-semibold text-gray-800 mb-3">
            Resolved Task
          </h2>

          <div className="space-y-3">
            {resolved.map((title, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2"
              >
                {/* Left */}
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white text-xs">
                    ✓
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    {title}
                  </span>
                </div>

                {/* Right */}
                <span className="text-xs text-gray-500">
                  Click to remove
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resolved;

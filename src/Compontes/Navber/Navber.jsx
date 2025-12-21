import React from 'react';

const Navber = () => {
    return (
       <div className="  max-w-[1200px] mx-auto navbar text-black shadow-sm flex flex-col md:flex-row justify-between items-center px-4">
  
  <div className="flex-1 mb-2 md:mb-0">
    <a className="bg-[url('...')] btn btn-ghost text-xl font-bold">CS — Ticket System</a>
  </div>
  <div className="flex-none">
    <ul className="flex flex-col md:flex-row gap-2 md:gap-4 font-bold items-center">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <li>
        <button className="p-3 bg-[#422AD5] text-white rounded-lg">
          New Ticket
        </button>  
      </li>
    </ul>
  </div>
</div>

    );
};

export default Navber;
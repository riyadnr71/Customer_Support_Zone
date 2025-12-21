import React from 'react';

const Fotter = () => {
    return (
       <div className="p-6  bg-black max-w-[1200px] mx-auto text-white">
  <div className="flex flex-col md:flex-row md:justify-around gap-8 md:gap-0 text-sm md:text-base">
    
    {/* About Section */}
    <div className="space-y-2 md:w-1/4">
      <h1 className="text-lg font-semibold">CS — Ticket System</h1>
      <p className="text-gray-300">
        Lorem Ipsum is simply dummy text of the <br />
        printing and typesetting industry. Lorem Ipsum has <br />
        been the industry's standard dummy text ever since the 1500s, <br />
        when an unknown printer took a galley of type and <br />
        scrambled it to make a type specimen book.
      </p>
    </div>

    {/* Company */}
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Company</h1>
      <ul className="space-y-1 text-gray-300">
        <li>About Us</li>
        <li>Our Mission</li>
        <li>Contact Sales</li>
      </ul>
    </div>

    {/* Services */}
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Services</h1>
      <ul className="space-y-1 text-gray-300">
        <li>Products & Services</li>
        <li>Customer Stories</li>
        <li>Download Apps</li>
      </ul>
    </div>

    {/* Information */}
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Information</h1>
      <ul className="space-y-1 text-gray-300">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Join Us</li>
      </ul>
    </div>

    {/* Social Links */}
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Social Links</h1>
      <ul className="space-y-1 text-gray-300">
        <li>@CS — Ticket System</li>
        <li>@CS — Ticket System</li>
        <li>@CS — Ticket System</li>
        <li>support@cst.com</li>
      </ul>
    </div>
  </div>

  <h1 className="text-center text-gray-400 text-sm mt-6">
    © 2025 CS — Ticket System. All rights reserved.
  </h1>
</div>


    );
};

export default Fotter;
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#392031] text-white px-6 md:px-16 py-10 text-sm md:text-base" id="contact">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-4 max-w-md">
            <p className="font-semibold text-lg">
              Teamwork and investments are intelligent championships.
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-8 mb-10 cursor-pointer">
              Business solutions.
            </h2>
            <div className="space-y-2 cursor-pointer">
              <div className="flex items-center gap-5">
                <span className="text-[#F06F58] font-semibold">Call now</span>
                <span className="material-icons text-sm">call</span>
                <span className="text-[#F06F58] font-semibold">*Available 24/7</span>
              </div>
              <div className="lg:flex items-center gap-5 mt-5">
                <p className="text-lg font-medium">+91 96969 36969</p>
                <button className="border-2 border-[#E3BEBE] rounded-tr-2xl rounded-bl-2xl font-bold px-4 py-1 mt-2 cursor-pointer">
                  <a href="#">Get free estimate</a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-[#F06F58] font-semibold text-2xl mb-1 cursor-pointer">Services</h3>
              <ul className="grid lg:grid-cols-2 gap-x-6 gap-y-1 font-bold cursor-pointer">
                <li>Investment Consulting</li>
                <li>Portfolio Management</li>
                <li>Strategic Financial Analysis</li>
                <li>Cost Analysis</li>
                <li>Audits & Reconciliation</li>
                <li>Book Keeping & P&L Finalization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#F06F58] text-2xl font-semibold mb-1 mt-5 cursor-pointer">Get in touch</h3>
              <p className="font-semibold cursor-pointer">Our Location: Nilkanth Chamber, Katargam, Surat.</p>
              <p className="font-semibold cursor-pointer">Call us on :- +91 96969 36969</p>
              <p className="font-semibold cursor-pointer">E-mail us on :- inforsupport@example.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/30"></div>
      </div>
    </div>

  );
};

export default Footer;

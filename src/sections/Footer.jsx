import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex jsutify-between items-start gap-20 flex-wrap max-lg:flex-col  ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm ">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className="w-12 h-12 flex justify-center items-center bg-white rounded-full hover:scale-105 transition duration-75 "
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}{" "}
          </div>
        </div>
        <div className='flex justify-between lg:gap-10 gap-20 flex-wrap ' >
              {
                footerLinks.map(section=>(
                  <div key={section} >
                    <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 " >{section.title}</h4>
                    <ul>
                      {
                        section.links.map(link=>(
                          <li key={link} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray duration-75  cursorr-pointer hover:scale-105 transition-all  ' >
                            <a>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }

        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center" >
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer" >
              <h4 className="text-[24px]" >&copy;</h4>
              <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer " >Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks, statistics } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>

        <ul
          className={`flex flex-1 justify-center items-center gap-16 transition-all ${toggle ? 'max-lg:flex bg-slate-100 rounded-l-3xl flex-col duration-[0.5s] right-0 top-0 w-[200px] h-[500px] absolute z-10': 'max-lg:hidden'}`}
        >
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat leading text-lg text-slate-gray hover:text-slate-900 transition duration-[.2s] ease-in"
                onClick={()=>setToggle(false)}
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block"
          onClick={()=>{setToggle(!toggle) }  }
        >
          <img src={hamburger} className="cursor-pointer " height={25} width={25} alt="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

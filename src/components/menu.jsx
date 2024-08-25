import { useRef, useState } from 'react';
import Link from 'next/link';
const Menu = ({navItems}) => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container relative" ref={container}>
      <div className="menu-bar flex justify-end items-center p-4 bg-transparent text-white">
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay fixed inset-0 bg-black bg-opacity-90 z-50">
          <div className="menu-overlay-bar flex justify-end items-center p-4 bg-tranparent text-white">
            <div className="menu-close cursor-pointer" onClick={toggleMenu}>
            </div>
          </div>

          <div className="menu-close-icon absolute top-4 right-4 text-white text-2xl cursor-pointer" onClick={toggleMenu}>
            <p>&#x2715;</p>
          </div>

          <div className="menu-copy flex flex-col items-start justify-start mt-8 text-white ml-6">
            <div className="menu-links space-y-4 mt-14">
              {navItems.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder mb-9">
                    <Link href={link.link} className="menu-link text-xl font-slussenLight hover:underline ml-3 mb-12" onClick={()=>setIsMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info mt-8">
              {/* Add any additional info here */}
            </div>
          </div>
          <div className="menu-preview mt-8">
            {/* Add any additional content or preview here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

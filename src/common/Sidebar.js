import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCircle, faCommentAlt, faDollar, faHome, faShield, faUser, faAngleDoubleLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import LogoBar from '../components/LogoBar';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
	const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
	const toggleProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);
  const location = useLocation(); // ✅ step 2

  const currentPath = location.pathname;

  return (
    <div className={`fixed top-0 sm:left-0 h-full bg-black max-w-[230px] w-full text-white transition-all duration-300 px-4 pt-8 z-[9999] ${isOpen ? 'left-0' : 'left-[-230px]'}`}>
      <button
        onClick={toggleSidebar}
        className="absolute bg-black top-6 right-[-40px] p-1 h-8 w-8 p-0 rounded-full text-white shadow-md block sm:hidden"
      >
        {isOpen ? <FontAwesomeIcon icon={faAngleDoubleLeft} className="h-4 w-4" /> : <FontAwesomeIcon icon={faBars} className="h-3 w-3 align-baseline" />}
      </button>
      <LogoBar showAdvisor={false} logoVarient={'white'} isSidebar={true} />   
      <div className="mt-16 flex flex-col">
        <SidebarItem icon = {faHome} text="Dashboard" href="/dashboard" isOpen={isOpen} currentPath={currentPath}/>
        <SidebarItem icon = {faUser} text="Clients" href="/clients" isOpen={isOpen} currentPath={currentPath}/>
        <SidebarItem icon = {faShield} text="Life" href="/life" isOpen={isOpen} currentPath={currentPath}/>
        <SidebarItem icon = {faCircle} text="Annuities" href="/annuities" isOpen={isOpen} currentPath={currentPath}/>
        <SidebarItem icon = {faCommentAlt}  text="Capstone AI" href="/capstone-ai" isOpen={isOpen} currentPath={currentPath}/>
        <SidebarItem icon = {faDollar} text="Wallet" href="/wallet" isOpen={isOpen} currentPath={currentPath} />
      </div>
      <div className='flex flex-col cursor-pointer absolute bottom-[40px] right-[16px]' onClick={toggleProfileMenu}>
        <FontAwesomeIcon icon={faChevronUp} className="h-3 w-3" />
        <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" />
      </div> 
        {
					isProfileMenuOpen ? (
						<div className='px-4 absolute w-full right-0 bottom-[75px]'>
							<ul className='rounded-[7px] caption border border-white/20 bg-black px-2'>
								<li>
										<Link to='mycompanysettings' className='block px-[5px] py-2.5'>Settings</Link>
								</li>
								<li>
										<button type='button' className='block caption font-normal text-left px-[5px] py-2.5 w-full'>Logout</button>
								</li>
							</ul>
						</div>
					)
					: null }	
    </div>
  );
};

const SidebarItem = ({ icon, text, href, isOpen, currentPath }) => {
    const isActive = currentPath === href;
    return (
        <a
            href={href}
            className={`flex items-center gap-4 mt-3 py-2 px-3 caption rounded-[5px] transition-colors
                ${isActive ? 'bg-[rgb(30,30,30)]' : 'hover:bg-[rgb(30,30,30)]'}`}
        >
            <span className=""><FontAwesomeIcon icon={icon} className="h-3 w-3" /></span>
            <span className="">{text}</span>
        </a>
    );
}

export default Sidebar;

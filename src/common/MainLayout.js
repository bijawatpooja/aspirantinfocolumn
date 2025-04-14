import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-0 sm:ml-[230px]">
        <nav className='flex justify-end  border-b border-[#d9d9d9] p-6 px-8 fixed top-0 w-full right-0 bg-white'>
					<div className='relative notifications cursor-pointer'>
						<span className='bg-[#00f] w-2 h-2 p-[3px] rounded-full content-none absolute top-0 right-0'></span>
						<FontAwesomeIcon icon={faBell} className="h-4 w-4" />
					</div>
        </nav>
				<div className='wrapper'>
        	<Outlet />
				</div>
      </main>
    </div>
  );
};

export default MainLayout;

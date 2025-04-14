import React from 'react';
import { Link } from 'react-router-dom';

const LogoBar = ({showAdvisor=false, logoVarient='white', isSidebar=false}) => {
  return (
    <div className="logo-bar">
        <div className="logo-bar-container">
            <div className="logo flex items-center gap-6 justify-left">
                <Link to="/">                
                  <img src={logoVarient === 'white' ? 'https://advisor.trycolumn.co/assets/logo-white-2-uQDNlcAM.svg' : 'https://advisor.trycolumn.co/assets/logo-black-Bl9zdo0G.svg'} alt="logo" className={isSidebar ? 'max-w-[100px]' : ''} />
                </Link>
                {showAdvisor && <h6 className='text-white border border-white rounded-[5px] py-[2px] px-[16px] font-normal text-sm leading-[21px]'>Advisor</h6>}
            </div>   
        </div>
    </div>
  );
};

export default LogoBar;

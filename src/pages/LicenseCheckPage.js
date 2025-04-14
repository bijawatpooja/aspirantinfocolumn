import React from 'react';
import LogoBar from '../components/LogoBar';
import LicenseCheck from '../components/LicenseCheck';

const LicenseCheckPage = () => {
  return (
    <div className="px-14">
			<div className="py-14">
				<LogoBar showAdvisor={false} logoVarient={'black'} />                    
			</div>
			<div className='card-lg max-w-[75vw] w-full mx-auto'>
				<LicenseCheck />
			</div>
    </div>
  );
};

export default LicenseCheckPage;



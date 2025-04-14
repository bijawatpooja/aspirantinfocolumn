import React from 'react';
import { Link } from 'react-router-dom';
import LogoBar from '../components/LogoBar';
import SignUp from '../components/SignUp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const SignupPage = () => {
  return (
    <div className="px-4 sm:px-14">
        <div className="py-14">
            <LogoBar showAdvisor={false} logoVarient={'black'} />                    
        </div>
				<div className='card-lg'>
					<Link to="/signin" className='flex gap-2 items-center font-15 mb-10'>
          <FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3" />
           <span>Go back</span></Link>
					<SignUp />  
				</div>
    </div>
  );
};

export default SignupPage;



import React from 'react';
import LogoBar from '../components/LogoBar';
import SignIn from '../components/SignIn';

const LandingPage = ({ onLogin }) => {
  return (
    <div className="landing-page">
        <div className="landing-page-container">
            <div className="top-black-bar bg-black min-h-[300px] p-[65px]">
                <LogoBar showAdvisor={true} />                    
            </div>
            <div className='landing-page-content'>
                <div className='-mt-[100px] mb-10 px-4'>
                    <SignIn onLogin={ onLogin }/>                  
                </div>
            </div>
        </div>
    </div>
  );
};

export default LandingPage;



import React from 'react';
import StickyCardSection from '../components/StickyCardSection';
import { dashboardCards } from '../staticContent/stickyCardContents';

const Dashboard = () => {
  return (
    <>
      <h4 className='h4 text-[18px]'>
        Welcome,
      </h4>
      <section>
        {
          dashboardCards.map((c, index) => (
            <StickyCardSection title={c.title} cardDetails={c.cardDetails} />
          ))
        }
      </section>
    </>
  );
};

export default Dashboard;
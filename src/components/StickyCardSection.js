import React from 'react';
import StickyCard from './StickyCard';

const StickyCardSection = ({title,cardDetails=[]}) => {

  return (
    <>
			<h5 className='mt-10 mb-8 h5'>{title}</h5>
			<div className='flex gap-8 flex-wrap'>
				{
					cardDetails.map((cd, index) => (
						<StickyCard cardDetails={cd}></StickyCard>
					))
				}
			</div>
		</>
  );
};

export default StickyCardSection;

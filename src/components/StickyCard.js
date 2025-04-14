import React from 'react';

const StickyCard = ({cardDetails}) => {
	const {cardTitle, value, valueLabel, details=[]} = cardDetails;
	
  return (
    <div className='border border-[#d9d9d9] rounded-[5px] flex flex-col bg-white p-4 max-w-full sm:max-w-[220px] min-h-[200px] w-full text-center caption'>
      <h6 className='text-left  text-[13px] font-medium'>{cardTitle}</h6>
			<div className='flex flex-col mt-5'>
				<h5 className='text-[32px] leading-[40px]'>{value}</h5>
				<span className='inline-block'>{valueLabel}</span>
			</div>
			<div className='flex flex-col font-regular caption justify-start mt-5'>
				{details.map((d, index) => (
					<p>{d.label} : <b>{d.value}</b></p>  
				))}
			</div>
    </div>
  );
};

export default StickyCard;

import React from 'react';
import { Link } from 'react-router-dom';
import CustomTable from '../common/Table';
import { tableInsuranceColumns, tableInsuranceData, tableFixedInsuranceColumns, tableFixedInsuranceData } from '../staticContent/tableData';

const LicenseCheck = () => {
  const insuranceData = tableInsuranceData;
  const insuranceColumns = tableInsuranceColumns;
  const fixedInsuranceColumns = tableFixedInsuranceColumns;
  const fixedInsuranceData = tableFixedInsuranceData;

  
  return (
    <div className="rounded-[10px] signup-card">
			<h5 className="h5 mt-2 leading-[25px]">Insurance License Check</h5>
      <p className='mt-3 caption'>Please enter your information below to confirm your National Producer Number (NPN).</p>
      <div className='mt-6'>
        <CustomTable data={insuranceData} columns={insuranceColumns} title='Insurance Licensing'/>
      </div>
      <div className='mt-14'>
        <CustomTable data={fixedInsuranceData} columns={fixedInsuranceColumns} title='Fixed Insurance and Annuities Appointments'/>
      </div>
      <div className='mt-8 flex justify-end pt-1'>
        <Link to="/dashboard" className='btn-black px-8 mb-5'>Continue</Link>
      </div>
    </div>
  );
};

export default LicenseCheck;

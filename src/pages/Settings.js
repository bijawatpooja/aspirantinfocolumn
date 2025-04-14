import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const CompanySettings = () => {

	const [editMode, setEditMode] = useState({
    legalName: true,
    dba: true,
		ein: true,
		companyName: true,
		phone: true,
		companyMailAddress: true,
		companyLegalAddress: true,
		
  });

  const toggleEditMode = (field) => {
    setEditMode((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
		<>
    <div className='w-full lg:w-3/5'>
      <h4 className='h4 text-[18px]'>Settings</h4>
      <section className='border-t border-t-zinc-300 mt-14'>
        <div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Legal name</label>
            </div>
            <div className='second-half-section flex flex-col'>
                <input
                    id="legalName"
                    name="legalName"
                    type="text"
                    className="input-field"
                    placeholder=""
                />
								{
									!editMode.legalName ? (
										<div className='flex flex-col'>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('legalName')}>Update</button>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('legalName')}>Cancel</button>
										</div>
									) :
										<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('legalName')}>Edit</button>
								}
            </div>
        </div>
				<div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Doing business as (dba)</label>
            </div>
            <div className='second-half-section flex flex-col'>
                <input
                    id="dba"
                    name="dba"
                    type="text"
                    className="input-field"
                    placeholder=""
                />
								{
									!editMode.dba ? (
										<div className='flex flex-col'>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('dba')}>Update</button>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('dba')}>Cancel</button>
										</div>
									) :
										<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('dba')}>Edit</button>
								}
            </div>
        </div>
				<div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Federal EIN</label>
            </div>
            <div className='second-half-section flex flex-col'>
                <input
                    id="ein"
                    name="ein"
                    type="text"
                    className="input-field"
                    placeholder=""
                />
								{
									!editMode.ein ? (
										<div className='flex flex-col'>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('ein')}>Update</button>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('ein')}>Cancel</button>
										</div>
									) :
										<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('ein')}>Edit</button>
								}
            </div>
        </div>
				<div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Company name</label>
								<p className='text-[rgb(152,162,179)] text-[11px] leading-[16px]'>This is the name that will appear on Column and in your notifications.</p>
            </div>
            <div className='second-half-section flex flex-col'>
                <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    className="input-field"
                    placeholder=""
                />
								{
									!editMode.companyName ? (
										<div className='flex flex-col'>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyName')}>Update</button>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyName')}>Cancel</button>
										</div>
									) :
										<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyName')}>Edit</button>
								}
            </div>
        </div>
				<div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Phone number</label>
            </div>
            <div className='second-half-section flex flex-col'>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="input-field"
                    placeholder=""
                />
								{
									!editMode.phone ? (
										<div className='flex flex-col'>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('phone')}>Update</button>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('phone')}>Cancel</button>
										</div>
									) :
										<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('phone')}>Edit</button>
								}
            </div>
        </div>
				<div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Company mailing address</label>
								<p className='text-[rgb(152,162,179)] text-[11px] leading-[16px]'>We’ll send you any ordered documents and other things to this address.</p>
            </div>
            <div className='second-half-section flex flex-col'>
                <input
                    id="companyMailAddress"
                    name="companyMailAddress"
                    type="text"
                    className="input-field"
                    placeholder=""
                />
								{
									!editMode.companyMailAddress ? (
										<div className='flex flex-col'>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyMailAddress')}>Update</button>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyMailAddress')}>Cancel</button>
										</div>
									) :
										<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyMailAddress')}>Edit</button>
								}
            </div>
        </div>
				<div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Company legal address</label>
            </div>
            <div className='second-half-section flex flex-col'>
                <input
                    id="companyLegalAddress"
                    name="companyLegalAddress"
                    type="text"
                    className="input-field"
                    placeholder=""
                />
								{
									!editMode.companyLegalAddress ? (
										<div className='flex flex-col'>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyLegalAddress')}>Update</button>
											<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyLegalAddress')}>Cancel</button>
										</div>
									) :
										<button type='button' className='font-bold bg-transparent border-b border-black ml-auto block mt-2' onClick={() => toggleEditMode('companyLegalAddress')}>Edit</button>
								}
            </div>
        </div>
				<div className='profile-sections'>
            <div className='first-half-section text-sm'>
                <label>Close account</label>
								<p className='text-[rgb(152,162,179)] text-[11px] leading-[16px]'>Request to permanently close your account.</p>
            </div>
            <div className='second-half-section flex flex-col'>
								<button type='button' className='ml-auto block mt-2 bg-black ml-auto rounded-[3px] text-red-600 py-2 px-4 border-none' onClick={handleOpen}>Request Account Clousure</button>
            </div>
        </div>
      </section>
    </div>
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
			>
			<Box sx={style} className='bg-white rounded-lg p-6 max-w-[400px]'>
				<h3 className='font-medium text-lg mb-4'>Close Account</h3>
				<p className='text-gray-600 mb-6 font-15'>
				Are you sure you want to close this account? This action cannot be undone.
				</p>
				<div sx={{ mt: 2 }}>
					<input
						id="companyLegalAddress"
						name="companyLegalAddress"
						type="text"
						className="input-field"
						placeholder=""
					/>
				</div>
				<div className='mt-3 flex justify-end gap-4'>
					<button type='button' className='px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50'onClick={handleClose} >Cancel</button>
					<button type='button' className='px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700'>Delete</button>
				</div>
			</Box>
		</Modal>
	</>
  );
};

export default CompanySettings;
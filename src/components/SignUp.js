import { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const StepTwoSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

const StepThreeSchema = Yup.object().shape({
  verificationCode: Yup.string()
    .length(6, 'Verification code must be 6 digits')
    .required('Verification code is required'),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailValue, setEmailValue] = useState('');
	const [phoneValue, setPhoneValue] = useState('');
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const formikRef = useRef();

  const handleEmailSubmit = (values, { setSubmitting }) => {
    setEmailValue(values.email);
    setEmailSubmitted(true);		
		setSubmitting(false);
  };

  const handlePhoneSubmit = (values, { setSubmitting }) => {
		setPhoneValue(values.phone);
    setPhoneSubmitted(true);
    setSubmitting(false);
  };

  const handleVerifyClick = async () => {
    if (!formikRef.current) return;

    const formik = formikRef.current;
    // Mark all fields as touched
    await formik.setTouched({
      password: true,
      confirmPassword: true,
      phone: true,
    });

    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      formik.submitForm(); // Triggers Formik's handleSubmit
    }
  };

  const handleVerificationSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    navigate('/signin'); // Navigate to a success page or any next page
  };

  return (
    <div className="rounded-[10px] signup-card">
      <h5 className="h5 mt-2">
        {emailSubmitted
          ? phoneSubmitted
            ? 'Verify your phone number'
            : 'Enter your phone number to proceed'
          : 'Get started by entering your email'}
      </h5>

      {!emailSubmitted ? (
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .required('Email is required')
              .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
          })}
          onSubmit={handleEmailSubmit}
        >
					{({ isSubmitting }) => (
						<Form>
							<div className="form-group mt-12">
								<label htmlFor="email" className="block text-[13px] mb-[10px]">Email</label>
								<Field name="email" type="email" className="input-field" />
								<ErrorMessage name="email" component="p" className="error-text" />
							</div>
							<button className="btn-black mt-14" type="submit">
								{isSubmitting ? 'Loading...' : 'Continue'}
							</button>
						</Form>
					)}
        </Formik>
      ) : !phoneSubmitted ? (
        <Formik
          innerRef={formikRef}
          initialValues={{ password: '', confirmPassword: '', phone: '' }}
          validationSchema={StepTwoSchema}
          onSubmit={handlePhoneSubmit}
        >
					{({ isSubmitting }) => (
						<Form>
							<div className="form-group mt-6 relative">
								<label className="block text-[13px] mb-[10px]">Email</label>
								<div className="flex items-center input-with-icon bg-gray-100 border-dark bg-disabled rounded-[3px] overflow-hidden">
									<div className="px-3 text-gray-500">
										<FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
									</div>
									<input
										type="email"
										value={emailValue}
										disabled
										className="flex-1 px-0 input-field bg-transparent text-gray-600 border-none outline-none"
									/>
									<button
										type="button"
										onClick={() => setEmailSubmitted(false)}
										className="text-[13px] text-black font-bold px-3"
									>
										Change
									</button>
								</div>
							</div>

							{/* Phone Number */}
							<div className="form-group mt-6">
								<label htmlFor="phone" className="block text-[13px] mb-[10px]">Phone Number</label>
								<Field name="phone" type="text" className="input-field" />
								<ErrorMessage name="phone" component="p" className="error-text" />
							</div>

							{/* Password */}
							<div className="form-group mt-6">
								<label htmlFor="password" className="block text-[13px] mb-[10px]">Password</label>
								<Field name="password" type="password" className="input-field" />
								<ErrorMessage name="password" component="p" className="error-text" />
							</div>

							{/* Confirm Password */}
							<div className="form-group mt-6">
								<label htmlFor="confirmPassword" className="block text-[13px] mb-[10px]">Confirm Password</label>
								<Field name="confirmPassword" type="password" className="input-field" />
								<ErrorMessage name="confirmPassword" component="p" className="error-text" />
							</div>

							<button className="btn-black mt-14" type="button" onClick={handleVerifyClick}>
								{isSubmitting ? 'Verifying...' : 'Verify with SMS'}
							</button>
						</Form>
					)}
        </Formik>
      ) : (
        <Formik
          initialValues={{ verificationCode: '' }}
          validationSchema={StepThreeSchema}
          onSubmit={handleVerificationSubmit}
        >
					{({ isSubmitting }) => (
						<Form>
							<div className="form-group mt-6">
								<label htmlFor="verificationCode" className="block text-[13px] mb-[10px]">Enter the 6-digit code sent to {phoneValue}</label>
								<Field name="verificationCode" type="text" className="input-field" />
								<ErrorMessage name="verificationCode" component="p" className="error-text" />
							</div>
							<div className="form-group mt-6 mb-0">
							<button
								type="button"
								onClick={() => setEmailSubmitted(false)}
								className="text-[13px] text-black font-bold"
							>
								Resend code
							</button>
							</div>
							<button className="btn-black mt-8" type="submit">
							{isSubmitting ? 'Verifying...' : 'Verify with SMS'}
							</button>
						</Form>
					)}
        </Formik>
      )}
    </div>
  );
};

export default SignUp;

import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const SignInSchema = object().shape({
  email: string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
    .required('Email is required'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const SignIn = ({ onLogin }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: SignInSchema,
    onSubmit: (values, { setSubmitting }) => {
      // Handle sign in logic here
      setSubmitting(false);
      onLogin();
      navigate('/dashboard');
    },
  });

  return (
    <div className="flex flex-col items-center justify-center sign-in-card">
      <div className="w-full text-left p-10">
        <h4 className="h4 mt-4">
          Sign in to your account
        </h4>
        <form onSubmit={formik.handleSubmit} className="mt-8">
          <div className="flex flex-col gap-8">
            <div>
              <label 
                htmlFor="email" 
                className="block text-[13px] mb-[10px]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="error-text">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-[13px] mb-[10px] flex justify-between items-center"
              >
                <span>Password</span>
                <Link to="/forgot" className='font-bold font-10'>Forgot your password?</Link>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="input-field"
                placeholder=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="error-text">{formik.errors.password}</p>
              )}
            </div>
            <div class="flex items-center">
              {/* Custom Checkbox */}
              <span class="w-3 h-3 border border-black rounded-[3px] p-[1px]">
                {/* Hidden Checkbox */}
                <input type="checkbox" id="remember-me" class="peer hidden" />
                <span className="bg-white rounded-[2px] w-full h-full peer-checked:bg-black block"></span>
              </span>
              {/*  Label */}
              <label for="remember-me" class=" font-10 leading-[10px] cursor-pointer ml-1">&nbsp;Remember Me on this device</label>
            </div>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="btn-black w-full mt-5"
          >
            {formik.isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
      <div className='bg-grey rounded-[10px] mt-14 p-[15px] w-full text-center'>
        <p className="link-text font-10">
          New to Column? <Link to="/signup" className='font-bold font-10'>Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn; 
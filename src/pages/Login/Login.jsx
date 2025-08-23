import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import img from '../../assets/images/login/login-img.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { LoginSchema } from './LoginSchema';
import { toast } from 'react-toastify';
import { sendDataToLogin } from '../../services/auth-service';
import { useContext, useEffect, useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import { AuthContext } from '../../context/Auth.context';

function Login(){
    const location = useLocation();
    const from = location.state?.from || '/';
    const {token, login} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    function handleLogin(values){
        sendDataToLogin(values)
        .then(data => {
            if(data.message === 'success'){
                toast.success('Login successful');
                setTimeout(() => {
                    login(data.token, values.checkbox);
                    navigate(from, {replace: true});
                }, 2000);
            }
        }).catch(err => {
            toast.error(err.response.data.message);
            throw err;
        })
    }
    
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkbox: false
        },
        validationSchema: LoginSchema,
        onSubmit: handleLogin
    })

    useEffect(() => {
        if(token) navigate('/', {replace: true});
    }, [token, navigate]);
    return(
        <div className="bg-gray-100 min-h-screen">
            <div className="container-style flex justify-center lg:*:w-1/2 *:p-5 py-5">
                {/* right side */}
                <div className='hidden lg:flex relative items-center'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className="w-100 h-80 m-auto rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover" src={img} alt="a cart with items" />   
                        </div>
                        <div className="text-center my-3">
                            <h1 className="text-xl font-bold mb-2"><span className="text-primary-500">Easy</span>Buy - Your One Stop Shop for Fresh Groceries</h1>
                            <p className="text-sm text-gray-500">Join our community of shoppers and get access to a wide selection of fresh produce, meats, and more.</p>
                        </div>
                    </div>
                </div>

                {/* login form */}
                <div>
                    <div className="bg-white p-10">
                        <div className="text-center mb-3">
                            <h1 className="text-4xl font-bold mb-2"><span className="text-primary-500">Easy</span>Buy</h1>
                            <p className="text-2xl font-bold mb-1">welcome back!</p>
                            <p className="text-gray-500">sign in to your account and start shopping</p>
                        </div>
                        {/* social login */}
                        <div className='*:py-1'>
                            <div>
                                <button className='border border-gray-300 w-full p-2 hover:bg-gray-100 transform-bg duration-500'>
                                    <div className='inline-block mr-2 text-red-500'>
                                        <FontAwesomeIcon icon={faGoogle} /> 
                                    </div>
                                    Continue with Google
                                </button>
                            </div>
                            <div>
                                <button className='border border-gray-300 w-full p-2 hover:bg-gray-100 transform-bg duration-500'>
                                    <div className='inline-block mr-2 text-blue-500'>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </div>
                                    Continue with Facebook
                                </button>
                            </div>
                        </div>

                        <form className='*:py-2' onSubmit={handleSubmit}>
                            <div className="py-1">
                                <label className="block text-gray-600 text-sm mb-1">Email</label>
                                <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className="form-control w-full p-2" id="email" placeholder="Enter your email" />
                                <p className="text-red-500 text-sm">{touched.email && errors.email && '*' +errors.email}</p>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-600 text-sm mb-1">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'} name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} className="form-control w-full p-2" id="password" placeholder="Enter your password" />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 transform -translate-y-1/2">{showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</button>
                                </div>
                                <p className="text-red-500 text-sm">{touched.password && errors.password && '*' + errors.password}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" onChange={handleChange} value={values.checkbox} name='checkbox' id='checkbox' />
                                <label htmlFor='checkbox' className=" text-gray-600 text-sm">Remember me</label>
                                {errors.checkbox && touched.checkbox && <p className="text-red-500 text-sm">{errors.checkbox}</p>}
                            </div>
                           
                            <div className="py-1">
                                <button type="submit" className="btn bg-primary-500 text-white w-full p-2">Login</button>
                            </div>
                        </form>
                        <hr className="my-3 text-gray-200" />
                        <div className="py-1">
                            <p className="text-center">Don't have an account? <Link to="/signup" className="text-primary-500">Sign up</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
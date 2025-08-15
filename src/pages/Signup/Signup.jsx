import personImg from '../../assets/images/signup/person-icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTruckFast, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useFormik } from 'formik'
import { SignupSchema } from "./SignupSchema";
import { toast } from 'react-toastify'
import { Link, Navigate, useNavigate } from 'react-router'
import { sendDataToSignup } from '../../services/auth-service'
import { AuthContext } from '../../context/Auth.context'
import { useContext } from 'react'
function Signup() {
    const {token} = useContext(AuthContext);
    const navigate = useNavigate(); 
    // formik
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: '', 
            email: '',
            password: '',
            rePassword: '',
            phone: '',
            checkbox: false
        },
        validationSchema: SignupSchema,
        onSubmit: handleSignup
    })

    // handle signup
    function handleSignup(values) {
        sendDataToSignup(values)
        .then(data => {
            if(data.message === 'success'){
                toast.success('Signup successful');
                setTimeout(() => {
                    navigate('/login');
                }, 2000)
            }
        }).catch(err => {
            toast.error(err.response.data.message);
            throw err;
        })
    }

    if(token) return <Navigate to="/" />
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='container-style flex justify-center flex-wrap lg:*:w-1/2 *:p-5 py-5'>
                <div className='hidden lg:block'>
                    <h1 className='text-2xl font-bold'>Welcome to <span className='text-primary-500'>EasyBuy</span></h1>
                    <p className='text-sm text-gray-500 mt-1'>Join us today and start shopping with ease and convenience</p>
                    <ul className='py-8 *:py-2'>
                        <li>
                            <div className='flex items-center gap-2'>
                                <div className='flex gap-1 text-primary-500 bg-primary-100 w-fit p-3 rounded-full'>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h2 className="font-bold">Premium Quality</h2>
                            </div>
                            <p className="text-sm text-gray-500">premium quality products from all over the world</p>
                        </li>
                        <li>
                            <div className='flex items-center gap-2'>
                                <div className='flex text-primary-500 bg-primary-100 w-fit p-3 rounded-full'>
                                    <FontAwesomeIcon icon={faTruckFast} />
                                </div>
                                <h2 className="font-bold">Fast Delivery</h2>
                            </div>
                            <p className="text-sm text-gray-500">fast delivery to your doorstep</p>
                        </li>
                        <li>
                            <div className='flex items-center gap-2'>
                                <div className='flex gap-1 text-primary-500 bg-primary-100 w-fit p-3 rounded-full'>
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                </div>
                                <h2 className="font-bold">Secure Shopping</h2>
                            </div>
                            <p className="text-sm text-gray-500">secure shopping experience with us</p>
                        </li>
                    </ul>
                    <div className='shadow p-5 rounded-md bg-white *:py-1'>
                        <div className="flex items-center gap-3 mb-1">
                            <div className='w-10'>
                                <img className='w-full' src={personImg} alt="" />
                            </div>
                            <div>
                                Sarah John
                                <div className='flex gap-1 text-yellow-400'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <blockquote>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nihil amet minima molestias omnis, mollitia beatae doloremque praesentium voluptatem cum magni recusandae natus enim corrupti laboriosam facilis deleniti architecto. Itaque.</blockquote>
                    </div>
                </div>

                <div className='bg-white w-full lg:w-1/2 rounded-md shadow-xl'>
                    <div className='text-center pb-4'>
                        <h2 className='text-3xl'>Create Your Account</h2>
                        <p className='text-sm text-gray-500'>Start your journey with us today</p>
                    </div>
                    <div className='flex *:w-1/2 *:p-1'>
                        <div>
                            <button className='font-bold border border-gray-300 w-full p-2 hover:bg-gray-100 transform-bg duration-500'>
                                <div className='inline-block mr-2 text-red-500'>
                                    <FontAwesomeIcon icon={faGoogle} /> 
                                </div>
                                Google
                            </button>
                        </div>
                        <div>
                            <button className='font-bold border border-gray-300 w-full p-2 hover:bg-gray-100 transform-bg duration-500'>
                                <div className='inline-block mr-2 text-blue-500'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                Facebook
                            </button>
                        </div>
                    </div>

                    <form className='py-5 space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input className='form-control block w-full' value={values.name} onChange={handleChange} onBlur={handleBlur} id="name" type="text" name="name" placeholder='Ali' />
                            {touched.name && errors.name && <p className='text-sm text-red-500'>*{errors.name}</p>}
                        </div>  

                        <div>
                            <label htmlFor="email">Email</label>
                            <input className='form-control block w-full' value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" type="text" name="email" placeholder='owOuW@example.com' />
                            {touched.email && errors.email && <p className='text-sm text-red-500'>*{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input className='form-control block w-full' value={values.password} onChange={handleChange} onBlur={handleBlur} id="password" type="password" name="password" placeholder='Create a strong password' />
                            {touched.password && errors.password ? <p className='text-sm text-red-500'>*{errors.password}</p> : <p className='text-sm text-gray-500'>Password must be at least 8 characters with numbers and symbols</p>}
                        </div>

                        <div>
                            <label htmlFor="rePassword">Confirm Password</label>
                            <input className='form-control block w-full' value={values.rePassword} onChange={handleChange} onBlur={handleBlur} type="password" name="rePassword" id="rePassword" placeholder='Confirm Password' />
                            {touched.rePassword && errors.rePassword && <p className='text-sm text-red-500'>*{errors.rePassword}</p>}
                        </div>

                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className='form-control block w-full' value={values.phone} onChange={handleChange} onBlur={handleBlur} name="phone" id="phone" placeholder='0123456789' />
                            {touched.phone && errors.phone && <p className='text-sm text-red-500'>*{errors.phone}</p>}
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                    <input type="checkbox" id="checkbox" name="checkbox" className='w-5 h-5' value={values.checkbox} onChange={handleChange} onBlur={handleBlur} />
                                    <label htmlFor="checkbox">I agree to the terms and conditions</label>
                            </div>
                            {touched.checkbox && errors.checkbox && <p className='text-sm text-red-500'>*{errors.checkbox}</p>}
                        </div>

                        <button type="submit" className='btn w-full bg-primary-500 text-white'>Create Account</button>
                    </form>

                    <div>
                        <p>Already have an account? <Link to="/login" className='text-primary-500'>Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup;
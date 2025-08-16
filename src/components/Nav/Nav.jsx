import { Link, NavLink } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faChevronDown, faMagnifyingGlass, faPhone, faRightFromBracket, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/Auth.context";
function Nav(){
    const {token, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    function handleLogout() {
        logout();
        navigate('/login');
    }
    return(
        <header>
            <div className="container-style text-sm">
                {/* Top Nav */}
                <div className="hidden lg:flex justify-between text-sm border-b border-gray-300">
                    <ul className="flex *:p-2">
                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:+201234567">+201 234 567</a>
                        </li>
                        <li>
                            <a href="mailto:0A2Gx@example.com">0A2Gx@example.com</a>
                        </li>
                    </ul>
                    <nav>
                        <ul className="flex *:p-2">
                            <li>
                                <Link to="/">Track Order</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <select name="" id="">
                                    <option value="egp">EGP</option>
                                    <option value="sar">SAR</option>
                                    <option value="aed">AED</option>
                                </select>
                            </li>
                            <li>
                                <select name="">
                                    <option value="en">English</option>
                                    <option value="ar">Arabic</option>
                                </select>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Middle Nav */}
                <div className="flex justify-between items-center py-2 lg:p-0">
                    <Link to="/">
                        <h1 className="text-2xl font-bold">EasyBuy</h1>
                    </Link>
                    {/* menu btn */}
                    <button onClick={() => {setShowMenu(!showMenu)}} className="btn lg:hidden text-2xl bg-primary-500 text-white">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <search className="relative hidden lg:block">
                        <input className="form-control min-w-80" type="text" placeholder="Search For Products..." />
                        <button className="absolute right-1 p-1">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </search>
                    <div className="hidden lg:block">
                        <ul className="flex *:p-2 text-center *:hover:text-primary-500 *:duration-500">
                            <li>
                                <NavLink to="/wishlist" className={({isActive})=> isActive ? "text-primary-500" : ""}>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <div>Wishlist</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({isActive})=> isActive ? "text-primary-500" : ""}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <div>Cart</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="account" className={({isActive})=> isActive ? "text-primary-500" : ""}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <div>Account</div>
                                </NavLink>
                            </li>
                            {
                                !token &&
                                    <>
                                        <li>
                                            <NavLink to="signup" className={({isActive})=> isActive ? "text-primary-500" : ""}>
                                                <FontAwesomeIcon icon={faUserPlus} />
                                                <div>Sign up</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="login" className={({isActive})=> isActive ? "text-primary-500" : ""}>
                                                <FontAwesomeIcon icon={faAddressCard} />
                                                <div>Login</div>
                                            </NavLink>
                                        </li>
                                    </>
                            }
                            {
                                token &&
                                    <li className="cursor-pointer">
                                        <button onClick={handleLogout} className="block">
                                            <div>
                                                <FontAwesomeIcon icon={faRightFromBracket} />
                                            </div>
                                            <p>Logout</p>
                                        </button>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bottom Nav */}
            <nav className="hidden lg:block bg-gray-100 py-3">
                <div className="container-style flex items-center gap-8">
                    <div className="relative group">
                        <button className="btn *:px-1 bg-primary-500 text-white">
                            <FontAwesomeIcon icon={faBars} />
                            <span>All Categories</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <menu className="hidden group-hover:block z-20 absolute text-sm bg-white *:p-3 *:border-b *:border-gray-300 *:hover:bg-gray-300">
                            <li>
                                <Link>
                                   Men's Clothing
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Women's Clothing
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Beauty & Personal Care
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    All Categories
                                </Link>
                            </li>
                        </menu>
                    </div>
                    <div className="flex gap-3">
                        <NavLink to="/" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>Home</NavLink>
                        <NavLink to="/recently" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>Recently Added</NavLink>
                        <NavLink to="/featured" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>Featured Products</NavLink>
                        <NavLink to="/offers" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>Offers</NavLink>
                        <NavLink to="/brands" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>Brands</NavLink>
                    </div>
                </div>
            </nav>

            {/* mobile nav */}
            {
            showMenu && (
                <>      
                    {/* overlay */}
                    <div onClick={() => setShowMenu(false)} className="lg:hidden bg-black/50 fixed inset-0 z-40"></div>
                    {/* slider */}
                    <div className="lg:hidden bg-white p-5 w-3/4 fixed top-0 bottom-0 z-100 *:py-5 overflow-y-auto">
                        <div className="flex justify-between items-center border-b border-gray-300">
                            <div className="text-3xl font-bold">EasyBuy</div>
                            <button onClick={() => setShowMenu(false)} className="btn text-2xl rounded-full">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        {/* search */}
                        <search className="relative">
                            <input className="form-control w-full min-w-50 p-3" type="text" placeholder="Search For Products..." />
                            <button className="absolute right-1 p-3">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </search>
                        {/* menu */}
                        <nav className="*:py-1">
                            <h2 className="font-bold text-xl">Main Menu</h2>
                            <ul className="border-b border-gray-300 *:flex *:items-center *:gap-2 *:py-3 *:hover:text-primary-500 *:transition-colors *:duration-300">
                                <li>
                                    <FontAwesomeIcon icon={faHeart} />  
                                    <NavLink to="/wishlist" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>wishlist</NavLink>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <NavLink to="/cart" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>cart</NavLink>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faUser} />
                                    <NavLink to="/account" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>account</NavLink>
                                </li>
                            </ul>
                            <h2 className="font-bold text-xl mt-5">Account</h2>
                            <ul className="*:py-3 *:flex *:items-center *:gap-2 *:hover:text-primary-500 *:transition-colors *:duration-300">
                                {!token && 
                                    <>
                                        <li>
                                            <FontAwesomeIcon icon={faUserPlus} />
                                            <NavLink to="/signup" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>sign up</NavLink>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faAddressCard} />
                                            <NavLink to="/login" className={ ({isActive})=>`${isActive?'text-primary-500': ''}` }>login</NavLink>
                                        </li>
                                    </>
                                }
                                {
                                    token &&
                                        <li>
                                            <button className="flex items-center gap-2" onClick={handleLogout}>
                                                <div>
                                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                                </div>
                                                <p>
                                                    logout
                                                </p>
                                            </button>
                                        </li>
                                }
                            </ul>
                        </nav>
                    </div>
                </>  
            )}
        </header>
    )
}

export default Nav
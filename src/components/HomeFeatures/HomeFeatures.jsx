import { faHeadset, faRotateLeft, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomeFeatures() {
    return (
        <section className="bg-white">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 container-style py-10'>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center justify-center w-10 h-10 text-primary-500 bg-primary-50 p-5 rounded-full'>
                        <FontAwesomeIcon icon={faTruckFast} />
                    </div>
                    <div className='text-sm'>
                        <h3>Free Delivery</h3>
                        <p>Orders over $100</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center justify-center w-10 h-10 text-primary-500 bg-primary-50 p-5 rounded-full'>
                        <FontAwesomeIcon icon={faRotateLeft} />
                    </div>
                    <div className='text-sm'>
                        <h3>30 Days Return</h3>
                        <p>satisfaction guaranteed</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center justify-center w-10 h-10 text-primary-500 bg-primary-50 p-5 rounded-full'>
                        <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <div className='text-sm'>
                        <h3>Secure Payment</h3>
                        <p>100% Protected</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center justify-center w-10 h-10 text-primary-500 bg-primary-50 p-5 rounded-full'>
                        <FontAwesomeIcon icon={faHeadset} />
                    </div>
                    <div className='text-sm'>
                        <h3>24/7 Support</h3>
                        <p>Dedicated Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeFeatures;
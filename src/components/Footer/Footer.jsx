import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="container-style">
      <div className=" flex flex-wrap justify-between border-b border-gray-300 text-center *:w-full md:*:w-1/2 md:text-start lg:*:w-1/4 *:p-5 ">
        <div>
          <h2 className="font-bold mb-3">EasyBuy</h2>
          <p className="mb-3">
            EasyBuy is a website that allows you to buy and sell products. It is
            a platform that allows you to buy and sell products. It is a
            platform that allows you to buy and sell products.
          </p>
          <ul className="flex gap-3">
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitch} />
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Categories</h2>
          <ul className="*:py-1">
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
            <li>Beauty & Personal Care</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Quick Links</h2>
          <ul className="*:py-1">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Shipping policy</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-3">Customer Service</h2>
          <ul className="*:py-1">
            <li>My Account</li>
            <li>My Orders</li>
            <li>wishlist</li>
            <li>Returns & Refunds</li>
            <li>Help center</li>
          </ul>
        </div>
      </div>
      <p className="py-3 text-gray-500">Copyright &copy; 2023 EasyBuy</p>
    </footer>
  );
}

export default Footer;

import facebook from "@/assets/footer/facebook.svg";
import instagram from "@/assets/footer/instagram.svg";
import twitter from "@/assets/footer/twitter.svg";
import visa from "@/assets/footer/visa.svg";
import mastercard from "@/assets/footer/mastercard.svg";
import paypal from "@/assets/footer/paypal.svg";

export function Footer() {
  return (
    <footer className="block w-full  bg-[#1c2833]  text-white  p-6 ">
      <div className="w-full block">
        <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center px-8 mb-6 gap-8">
          <div className="m-0 text-[20px] font-sans font-bold">
            <h3>Up Ecommerce</h3>
            <p className="my-1.5 text-[14px] text-center">NIT: 123456789</p>
          </div>
          <div className="flex mx-2 no-underline text-[16px] space-x-4">
            <a href="facebook.com">
              <img src={facebook} alt="Facebook logo" width="32" height="32" />
            </a>
            <a href="https://twitter.com">
              <img src={twitter} alt="Twitter logo" width="32" height="32" />
            </a>
            <a href="instagram.com">
              <img
                src={instagram}
                alt="Insñtagram logo"
                width="32"
                height="32"
              />
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="flex flex-col gap-2.5 font-bold">Payment Methods</p>
            <div className="flex gap-2.5 justify-center">
              <img src={visa} alt="Visa logo" width="32" height="32" />
              <img
                src={mastercard}
                alt="Mastercard logo"
                width="32"
                height="32"
              />
              <img src={paypal} alt="Paypal logo" width="32" height="32" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  p-2.5 px-5  ">
        <ul className="flex list-none p-0 m-0 text-center space-x-6  md: flex-wrap justify-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

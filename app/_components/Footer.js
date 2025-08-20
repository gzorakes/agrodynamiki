import Link from "next/link";
import logo from "@/public/logo_agrodynamiki.png";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

function Footer() {
  return (
    <footer className="px-8 py-5 z-20 bg-main-700 text-main-100 font-semibold">
      <div className="max-w-7xl mx-auto">
        <Link href="/" aria-label="Home">
          <Image
            className="w-60 mx-auto mb-6"
            src={logo}
            alt="Agrodynamiki logo"
          />
        </Link>
        <div className="mb-5">
          <ul className="flex flex-col lg:flex-row lg:justify-around items-center gap-4">
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-main-200" />
              <div>
                <p>+30 28970 21 030</p>
                <p>+30 6949 373 296</p>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <MdEmail className="text-main-200" />
              <div>
                <p>info@agrodynamiki.gr</p>
                <p>androulakis61@gmail.com</p>
              </div>
            </li>
            <Link href="https://www.google.com/maps/place/%CE%91%CE%B3%CF%81%CE%BF%CE%B4%CF%85%CE%BD%CE%B1%CE%BC%CE%B9%CE%BA%CE%AE+%CE%93%CE%B5%CF%89%CF%81%CE%B3%CE%B9%CE%BA%CE%AC+%CE%95%CF%86%CF%8C%CE%B4%CE%B9%CE%B1+%CE%91%CE%BD%CE%B4%CF%81%CE%BF%CF%85%CE%BB%CE%AC%CE%BA%CE%B7%CF%82+%CE%95%CE%BB%CE%B5%CF%85%CE%B8%CE%AD%CF%81%CE%B9%CE%BF%CF%82+%CE%9A%CE%B1%CE%B9+%CE%A3%CE%AF%CE%B1+%CE%9F%CE%95/@35.3221105,25.3625098,17z/data=!3m1!4b1!4m6!3m5!1s0x149a66883868de91:0x189338d9bcfeeb5b!8m2!3d35.3221105!4d25.3650901!16s%2Fg%2F11cm0hkp49?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D">
              <li className="flex gap-3 items-center">
                <FaLocationDot className="text-main-200" />
                <div>
                  <p>Χερσόνησος, Ηράκλειο Κρήτης</p>
                  <p>500μ από τη διακλάδωση Λασιθίου</p>
                </div>
              </li>
            </Link>
            <li className="flex gap-3 items-center">
              <Link href="https://www.facebook.com/agrodynamiki/">
                <FaFacebook
                  size={28}
                  className="text-[#1877F2] hover:opacity-60"
                />
              </Link>
              <Link href="https://www.instagram.com/agrodynamiki_georgika_efodia/">
                <FaInstagram
                  size={28}
                  className="text-[#E4405F] hover:opacity-60"
                />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-sm text-stone-500 font-light">
          Powered by Zorakis George
        </p>
      </div>
    </footer>
  );
}

export default Footer;

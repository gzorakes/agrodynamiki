"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_agrodynamiki.png";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <header className="border-b border-primary-900 px-8 py-5 z-20 bg-custom-bg1 text-stone-700 font-semibold ">
      <div className="flex justify-between max-w-7xl mx-auto lg:items-center container">
        <Link href="/">
          <Image className="min-w-[200px]" src={logo} alt="Agrodynamiki logo" />
        </Link>
        <nav className="z-10 text-xl">
          <ul className="lg:flex hidden gap-8 lg:gap-16 items-center">
            <li>
              <Link href="/services" className="hover:text-stone-500">
                Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-stone-500">
                Προϊόντα
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-stone-500">
                Αγροδυναμική
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-stone-500">
                Επικοινωνία
              </Link>
            </li>
          </ul>
        </nav>
        {/* Small screen */}
        <div className="lg:hidden cursor-pointer">
          {isMenuOpen ? (
            <HiX size={30} onClick={handleMenu} />
          ) : (
            <HiMenu size={30} onClick={handleMenu} />
          )}
        </div>
      </div>

      <nav className="z-10 text-xl lg:hidden">
        <div
          className={`overflow-hidden transition-[max-height] duration-500  [will-change:max-height]
      ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-8 mt-8 text-center">
            <li>
              <Link href="/services" className="hover:text-stone-500">
                Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-stone-500">
                Προϊόντα
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-stone-500">
                Αγροδυναμική
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-stone-500">
                Επικοινωνία
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

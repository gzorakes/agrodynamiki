"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_agrodynamiki.png";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen((v) => !v);
  }

  return (
    <header className="relative px-8 py-5 z-20 bg-main-700 text-main-100 font-semibold">
      <div className="flex justify-between max-w-7xl mx-auto lg:items-center container">
        <Link href="/" aria-label="Home">
          <Image className="w-60" src={logo} alt="Agrodynamiki logo" />
        </Link>

        {/* Desktop nav */}
        <nav className="z-10 text-xl">
          <ul className="lg:flex hidden gap-8 lg:gap-16 items-center">
            <li>
              <Link href="/services" className="hover:text-main-200">
                Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-main-200">
                Προϊόντα
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-main-200">
                Αγροδυναμική
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-main-200">
                Επικοινωνία
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden cursor-pointer"
          onClick={handleMenu}
          aria-label={isMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Backdrop that covers page content (doesn't push layout) */}
      <div
        onClick={handleMenu}
        className={`fixed inset-0 bg-black/40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile menu panel: absolutely positioned under the header, not in flow */}
      <nav id="mobile-menu" className="lg:hidden" aria-hidden={!isMenuOpen}>
        <div
          className={`absolute left-0 right-0 top-full bg-main-700 z-30 shadow-lg
          transition-all duration-300 origin-top
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ul className="flex flex-col gap-8 py-8 px-8 text-center text-xl">
            <li>
              <Link
                href="/services"
                className="hover:text-stone-300"
                onClick={() => setMenuOpen(false)}
              >
                Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-stone-300"
                onClick={() => setMenuOpen(false)}
              >
                Προϊόντα
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-stone-300"
                onClick={() => setMenuOpen(false)}
              >
                Αγροδυναμική
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-stone-300"
                onClick={() => setMenuOpen(false)}
              >
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

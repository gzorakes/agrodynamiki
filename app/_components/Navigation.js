import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/services" className="hover:text-accent-500">
            Services
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-accent-500">
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-accent-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

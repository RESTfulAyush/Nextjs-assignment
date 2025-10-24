"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Partner With Us", href: "/partner-with-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#0D0E1B] z-60 px-9">
      <div className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos/logo.png"
            alt="DABAS EV Logo"
            width={160}
            height={0}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-1 justify-end gap-28 text-[#FFFBFB]">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-orange-500 font-medium text-[16px] font-inter"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-[#0D0E1B] px-6 py-4 text-gray-200">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-orange-500 font-medium text-[16px] font-inter"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

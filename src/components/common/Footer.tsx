import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Image
              src="/logos/logo.png"
              alt="DabasEV Charge"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the charge in sustainable transportation with innovative
              EV charging solutions.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home Charging
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Public Charging
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fleet Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms Of Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            2025 DabasEV .All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

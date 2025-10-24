const Footer = () => (
  <footer className="bg-black text-gray-400 py-8 px-6 mt-20 border-t border-gray-800">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Dabas EV</h2>
        <p className="text-sm">
          Leading the charge in sustainable transportation.
        </p>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Services</h3>
        <ul className="space-y-1 text-sm">
          <li>Home Charging</li>
          <li>Public Charging</li>
          <li>Fleet Management</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Company</h3>
        <ul className="space-y-1 text-sm">
          <li>About Us</li>
          <li>Partner With Us</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">Legal</h3>
        <ul className="space-y-1 text-sm">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>

    <p className="text-center text-sm mt-8 text-gray-500">
      © 2025 DabasEV. All rights reserved.
    </p>
  </footer>
);

export default Footer;

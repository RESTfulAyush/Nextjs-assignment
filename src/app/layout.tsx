import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Dabas EV | India's Largest EV Charging Network",
  description: "Discover, charge, and pay seamlessly with Dabas EV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0E1A] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

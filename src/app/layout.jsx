import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ItemsProvider } from "@/context/ItemsContext";
import { Inter, Poppins } from "next/font/google";

// Body + Subtitle font (Full App)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

// Title / Heading font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Gadget Tech",
  description: "Gadget listing app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ItemsProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ItemsProvider>
      </body>
    </html>
  );
}

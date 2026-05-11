import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Western Mega College – BHM, MBA & BIT | Butwal, Nepal",
  description:
    "Western Mega College – Premier institution in Butwal offering BHM, MBA, and upcoming BIT programs affiliated with Lincoln University College, Malaysia. Shaping future leaders since 2013.",
  keywords:
    "Western Mega College, BHM college Nepal, MBA college Butwal, BIT college Nepal, Hotel Management Nepal, Lincoln University College Nepal",
  icons: {
    icon: [
      {
        url: "https://westernmegacollege.edu.np/_next/static/media/logo.5a59ae59.png",
        type: "image/png",
      },
    ],
    apple: "https://westernmegacollege.edu.np/_next/static/media/logo.5a59ae59.png",
  },
  openGraph: {
    title: "Western Mega College – BHM, MBA & BIT",
    description: "Premier institution in Butwal, Nepal offering BHM, MBA and BIT programs.",
    siteName: "Western Mega College",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      {/* suppressHydrationWarning prevents false hydration mismatches from browser extensions */}
      <body suppressHydrationWarning>
        <Navbar />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

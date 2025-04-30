import { Montserrat, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./Components/SmoothScrolling";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Happy Birth-Day",
  description: "Created by your LOVED-ONE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${dancingScript.variable}`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}

import {Poppins, Inter} from "next/font/google";

// Setup Poppins with different weights
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

// Setup Inter with different weights
export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

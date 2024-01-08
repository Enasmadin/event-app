import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
  icons: {
    icon: "./assets/images/logo.svg",
  },
});

export const metadata = {
  title: "Evently",
  description: "Evently this is plateform  for event management  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={PoppinsFont.variable}>{children}</body>
      </ClerkProvider>
    </html>
  );
}

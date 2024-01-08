import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const metadata = {
  title: "Evently",
  description: "Evently this is plateform  for event management  ",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";

export const metadata = {
  title: "🥦 SimplyFood",
  description: "Delicious meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

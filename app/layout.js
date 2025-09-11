import { MainHeader } from "@/components/main-header/MainHeader";
import "./globals.css";

export const metadata = {
  title: "Projeto Integrador",
  description: "Protótipo projeto integrador.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

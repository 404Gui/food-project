import { MainHeader } from "@/components/main-header/MainHeader";
import "./globals.css";

export const metadata = {
  title: "Food Projeto",
  description: "Refeições compartilhadas por uma comunidade apaixonada por comida.",
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

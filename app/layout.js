import { MainHeader } from "@/components/main-header/MainHeader";
import "./globals.css";

export const metadata = {
  title: "Magia Goiânia - Doceria",
  description: "Descubra o sabor da magia! A Magia Goiânia é uma doceria artesanal que transforma ingredientes em momentos doces e inesquecíveis.",
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

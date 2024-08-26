import { Roboto } from "next/font/google";
import { Header } from "./components/shared/Header/Header";
import { Footer } from "./components/shared/Footer";

import "app/sass/globals.sass";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

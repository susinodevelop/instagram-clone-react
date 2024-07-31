import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram Clone",
  description: "Esta página es un proyecto personal de susinodevelop",
};
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white`}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

export default RootLayout;
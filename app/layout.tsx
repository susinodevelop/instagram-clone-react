import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram Clone",
  description: "Esta página es un proyecto personal de susinodevelop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white`}>
        <ChakraProvider>
          <div className="w-screen flex flex-row ">
            <Sidebar />
            <Box className="w-2/3 ml-[33.333333%]">
              {children}
            </Box>
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}

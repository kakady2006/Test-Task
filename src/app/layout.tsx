import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { ReactNode } from "react";
const inter = Inter({subsets: ['latin', 'cyrillic']});

export const metadata: Metadata = {
  title: "Postal Administration",
  description: "Сервис для управления посылками",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body className={inter.className}>
            {children}
            </body>
        </html>
    );
}
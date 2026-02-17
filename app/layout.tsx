import {Metadata} from "next";
import {Inter} from "next/font/google";
import './globals.css';
import {ReactNode} from "react";

const inter = Inter({subsets: ['latin', 'cyrillic']});

export const metadata: Metadata = {
    title: "Добавление посылки",
    description: "Добавление посылки",
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
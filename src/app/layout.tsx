import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create GELLIFY App",
  description: "Bolierplate for GELLIFY App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <>
          {children}
          <Toaster />
        </>
      </body>
    </html>
  );
}

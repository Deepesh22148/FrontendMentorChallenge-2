import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'


const figTree = localFont({
  src : [
    {
      path : "./fonts/Figtree-Italic-VariableFont_wght.ttf",
      style : "italic"
    } ,
    {
      path : "./fonts/Figtree-VariableFont_wght.ttf",
      style : 'normal'
    }
  ],
  variable : "--font-figtree-local",
  display : "swap"
})
export const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "Blog Preview Card using tailwind and nextjs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figTree.variable} ${figTree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-figtree">{children}</body>
    </html>
  );
}

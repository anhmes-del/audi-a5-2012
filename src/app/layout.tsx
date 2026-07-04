import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUDI A5 SPORTBACK 2012 | Xe Sang Nhập Đức 399 Triệu",
  description: "Bán xe Audi A5 Sportback sản xuất 2012 nhập khẩu nguyên chiếc Đức. Động cơ 2.0 TFSI, dẫn động 4 bánh Quattro, kiểu dáng coupe thể thao tuyệt đẹp giá chỉ 399 Triệu Đồng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f5f5f7]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

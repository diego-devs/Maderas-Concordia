import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsAppChat } from "@/components/floating-whatsapp-chat";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyInfo } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chupamirto Producciones",
    template: "%s | Chupamirto Producciones",
  },
  description:
    "Casa productora audiovisual en Querétaro con producción, renta de equipo y postproducción para cine, comercial y contenido de marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#120d0b] text-stone-100">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="relative z-10 flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsAppChat phoneNumber={companyInfo.whatsappNumber} />
        </div>
      </body>
    </html>
  );
}

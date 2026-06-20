import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SITE-19 // SCP Containment Breach Survival",
  description: "A single-player SCP containment breach survival simulator. Play as Class-D, Scientist, Guard, or unlock the SCP role. Text-based and 3D first-person modes.",
  keywords: ["SCP", "containment breach", "survival horror", "Site-19", "SCP-173", "SCP-096", "SCP-682"],
  authors: [{ name: "Z.ai" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "SITE-19 // SCP Containment Breach",
    description: "Survive the breach. Escape the facility. Or become the anomaly.",
    url: "https://chat.z.ai",
    siteName: "SITE-19",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SITE-19 // SCP Containment Breach",
    description: "Survive the breach. Escape the facility. Or become the anomaly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

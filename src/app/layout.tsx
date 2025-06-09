import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MorphingBackground from "../components/MorphingBackground";
import { trackClickEvent } from "../utils/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ken – Animated Psychology Shorts with a Twist",
  description: "Discover bite-sized, doodle-animated videos on mental tricks, manipulation hacks, and social influence. Watch, laugh, learn.",
  keywords: [
    "psychology Shorts",
    "mental hacks",
    "social influence",
    "animated storytelling",
    "doodle YouTube"
  ],
  openGraph: {
    title: "Ken – Animated Psychology Shorts",
    description: "Learn how your mind tricks you – with funny, fast, illustrated Shorts.",
    images: [
      {
        url: "/avatar.png",
        width: 400,
        height: 400,
        alt: "Ken (Ana) Avatar – Animated Psychology Shorts"
      }
    ],
    type: "website"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Ken – Animated Psychology Shorts with a Twist</title>
        <meta name="description" content="Discover bite-sized, doodle-animated videos on mental tricks, manipulation hacks, and social influence. Watch, laugh, learn." />
        <meta name="keywords" content="psychology Shorts, mental hacks, social influence, animated storytelling, doodle YouTube" />
        <meta property="og:title" content="Ken – Animated Psychology Shorts" />
        <meta property="og:description" content="Learn how your mind tricks you – with funny, fast, illustrated Shorts." />
        <meta property="og:image" content="/avatar.png" />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&display=swap" rel="stylesheet" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T46RZHY4RY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T46RZHY4RY');
          `}
        </Script>
      </head>
      <body className="bg-black text-offwhite font-sans">
        <MorphingBackground />
        <nav className="w-full flex justify-center gap-6 py-4 bg-black/80 sticky top-0 z-10">
          <a href="/" className="text-offwhite hover:text-neon-green font-bold">Home</a>
          <a href="/watch" className="text-offwhite hover:text-neon-green font-bold">Watch</a>
          <a href="/templates" className="text-offwhite hover:text-neon-green font-bold">Templates</a>
          <a href="/about" className="text-offwhite hover:text-neon-green font-bold">About</a>
        </nav>
        {/* Sample button for GA event tracking */}
        <button onClick={() => trackClickEvent('subscribe_button')} className="fixed bottom-4 right-4 bg-neon-green text-black px-4 py-2 rounded font-bold shadow-lg z-50">Test Subscribe Event</button>
        {children}
      </body>
    </html>
  );
}

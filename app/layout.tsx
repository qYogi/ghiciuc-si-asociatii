import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Whatsapp } from "@/app/_components/whatsapp/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghiciuc si Asociații | Cabinet Avocat Iași",
  description:
    "Cabinet de avocatură în Iași. Vlad Ghiciuc și echipa oferă consultanță juridică specializată în drept penal, civil și comercial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const underMaintenance = false;

  return (
    //use the underMentenance variable to conditionally render the maintenance page

    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Avocat Iasi. Birou Avocatura Iasi." />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {underMaintenance ? (
          <div className="w-full fixed inset-0 bg-gray-50 z-50 flex items-center justify-center min-h-screen px-4">
            <div className="text-center max-w-2xl">
              <div className="animate-pulse mb-8">
                <span className="text-6xl">🛠️</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                În Mentenanță
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Ne îmbunătățim experiența pentru dumneavoastră.
                <br />
                Vă rugăm să reveniți în curând!
              </p>

              <div className="text-gray-500 mt-8">
                <p className="text-lg">
                  Aveți nevoie de asistență urgentă? <br />
                  Contactați-ne la{" "}
                  <a
                    href="mailto:office@ghiciucsiasociatii.ro
"
                    className="text-blue-600 hover:underline"
                  >
                    office@ghiciucsiasociatii.ro
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {children}
            <Whatsapp />
          </>
        )}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SWRegistration from "./SWRegistration";

export const metadata: Metadata = {
  title: "StudyTools",
  description: "Herramientas para estudiantes",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <nav className="p-5 bg-black text-white flex gap-5">
          <Link href="/">Promedios</Link>
          <Link href="/tareas">Tareas</Link>
        </nav>

        {children}

        <SWRegistration />
      </body>
    </html>
  );
}
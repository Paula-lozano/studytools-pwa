import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SWRegistration from "./SWRegistration";

export const metadata: Metadata = {
  title: "StudyFlow",
  description: "App de productividad estudiantil",
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
        <nav className="bg-black text-white p-5 flex gap-6 text-lg font-semibold shadow-lg">
          <Link href="/">📚 Materias</Link>
          <Link href="/tareas">✅ Tareas</Link>
        </nav>

        {children}

        <SWRegistration />
      </body>
    </html>
  );
}
"use client";

import { useState } from "react";

export default function Home() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");

  const promedio =
    (Number(nota1) + Number(nota2)) / 2;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Calculadora de Promedio
      </h1>

      <input
        type="number"
        placeholder="Nota 1"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        className="border p-2 mr-2"
      />

      <input
        type="number"
        placeholder="Nota 2"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        className="border p-2"
      />

      <h2 className="mt-5 text-xl">
        Promedio: {isNaN(promedio) ? 0 : promedio}
      </h2>
    </main>
  );
}
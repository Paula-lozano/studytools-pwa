"use client";

import { useState } from "react";

export default function Home() {
  const [materia, setMateria] = useState("");
  const [materias, setMaterias] = useState<string[]>([]);

  const agregarMateria = () => {
    if (materia.trim() !== "") {
      setMaterias([...materias, materia]);
      setMateria("");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-8 text-white">
      <h1 className="text-4xl font-bold mb-2">
        📚 StudyFlow
      </h1>

      <p className="mb-8 text-lg">
        Organiza tus materias y mejora tu productividad.
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-xl text-black max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          Mis Materias
        </h2>

        <input
          type="text"
          placeholder="Ej: Matemáticas"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button
          onClick={agregarMateria}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl w-full transition"
        >
          Agregar Materia
        </button>

        <div className="mt-6 space-y-3">
          {materias.map((item, index) => (
            <div
              key={index}
              className="bg-purple-100 p-3 rounded-xl font-semibold"
            >
              📖 {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
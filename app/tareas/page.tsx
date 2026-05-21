"use client";

import { useState } from "react";

export default function Tareas() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setLista([...lista, tarea]);
      setTarea("");
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Lista de Tareas
      </h1>

      <input
        type="text"
        placeholder="Nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        className="border p-2 mr-2"
      />

      <button
        onClick={agregarTarea}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Agregar
      </button>

      <ul className="mt-5">
        {lista.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </main>
  );
}
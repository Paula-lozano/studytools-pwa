"use client";

import { useState } from "react";

interface Tarea {
  texto: string;
  completada: boolean;
}

export default function Tareas() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = () => {
    if (texto.trim() !== "") {
      setTareas([
        ...tareas,
        { texto, completada: false },
      ]);
      setTexto("");
    }
  };

  const completar = (index: number) => {
    const nuevas = [...tareas];
    nuevas[index].completada =
      !nuevas[index].completada;
    setTareas(nuevas);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-400 p-8 text-white">
      <h1 className="text-4xl font-bold mb-2">
        ✅ Mis Tareas
      </h1>

      <p className="mb-8 text-lg">
        Gestiona tus actividades diarias.
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-xl text-black max-w-md">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button
          onClick={agregarTarea}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl w-full transition"
        >
          Agregar Tarea
        </button>

        <div className="mt-6 space-y-3">
          {tareas.map((tarea, index) => (
            <div
              key={index}
              onClick={() => completar(index)}
              className={`p-3 rounded-xl cursor-pointer transition ${
                tarea.completada
                  ? "bg-green-200 line-through"
                  : "bg-blue-100"
              }`}
            >
              {tarea.completada ? "✔️" : "📌"}{" "}
              {tarea.texto}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
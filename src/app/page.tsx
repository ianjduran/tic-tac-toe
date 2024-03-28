import Image from "next/image";
import Board from "./components/Board";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-12 bg-gradient-to-br from-gray-950 via-slate-950 via-55% to-sky-950 text-white"> 
    {/* justify-between */}
        <div className="flex flex-col items-center mb-8">
            <h1 className="font-bold text-3xl">Tic-Tac-Toe</h1>
            <h3>Caso practico</h3>
        </div>
        <Board></Board>
    </main>
  );
}

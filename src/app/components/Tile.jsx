// Tile Component
export default function Tile({value,className="", onSquareClick}){


    return <button className={`transition active:scale-95 block hover:bg-opacity-80 bg-slate-900 size-20 w-24 rounded-md text-2xl font-bold  ${className}`}
                    onClick={onSquareClick}
                    >
                        {value}
            </button>
}

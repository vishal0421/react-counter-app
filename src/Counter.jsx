import { useState } from "react";
export default function Counter() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);


  const increment = () => {
    setCount(count + step);
    addHistory(`+${step}`);
  };

  const decrement = () => {
    setCount(count - step);
    addHistory(`-${step}`);
  };


  const reset = () => {
    setCount(0);
    setHistory([]);
  };


  const addHistory = (entry) => {
    setHistory((prev) => [...prev.slice(-5), entry]);
  };


  const getCountColor = () => {
    if (count > 0) return "text-emerald-500";
    if (count < 0) return "text-rose-500";
    return "text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 w-full max-w-sm flex flex-col items-center gap-6">

        <div className="text-center">

          <h1 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">
            Counter App
          </h1>

        </div>

        <div className={`text-8xl font-bold font-mono transition-colors duration-300 ${getCountColor()}`}>
          {count}
        </div>

        <div className={`text-xs font-semibold px-3 py-1 rounded-full 
          ${count > 0 ? "bg-emerald-50 text-emerald-600"
            : count < 0 ? "bg-rose-50 text-rose-500"
              : "bg-gray-100 text-gray-500"}`}>
          {count > 0 ? "Positive " : count < 0 ? "Negative " : "Zero "}
        </div>

        <div className="w-full">
          <p className="text-xs text-gray-400 font-medium mb-2 text-center tracking-wider uppercase">
            Step size
          </p>
          <div className="flex gap-2 justify-center">
            {[1, 5, 10, 100].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`px-4 py-1.5 rounded-xl text-sm font-bold border transition-all duration-200
                  ${step === s
                    ? "bg-gray-900 text-white border-gray-900 scale-105"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                  }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={decrement}
            className="w-16 h-16 rounded-2xl border-2 border-rose-200 text-rose-500 
                       text-3xl font-bold bg-white hover:bg-rose-50 
                       active:scale-95 transition-all duration-150 shadow-sm"
          >
            −
          </button>

          <button
            onClick={reset}
            className="px-5 h-12 rounded-2xl border border-gray-200 text-gray-400 
                       text-sm font-semibold bg-white hover:bg-gray-50 
                       active:scale-95 transition-all duration-150"
          >
            Reset
          </button>


          <button
            onClick={increment}
            className="w-16 h-16 rounded-2xl border-2 border-emerald-200 text-emerald-500 
                       text-3xl font-bold bg-white hover:bg-emerald-50 
                       active:scale-95 transition-all duration-150 shadow-sm"
          >
            +
          </button>
        </div>


        {history.length > 0 && (
          <div className="w-full border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-2 text-center">
              Recent Changes
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {history.map((h, i) => (
                <span
                  key={i}
                  className={`text-xs font-mono px-3 py-1 rounded-full border
                    ${h.startsWith("+")
                      ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                      : "bg-rose-50 text-rose-500 border-rose-100"
                    }`}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import React from "react";
import useWeather from "./hook";
import { useState } from "react";
function App() {
    const [city, setCity] = useState("london");
  const { sub, weather, setSub } = useWeather();
let submite=(e)=>{
e.preventDefault();
setSub(city);



}


  return (<>
 <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
  <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

    <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
      City Name is <span className="text-indigo-600">{city}</span>
    </h1>

    <div className="space-y-4">

      <h1 className="rounded-xl bg-indigo-50 p-4 text-lg font-semibold text-slate-700">
        Current Temperature =
        <span className="ml-2 text-2xl font-bold text-indigo-600">
          {weather?.temperature}
        </span>
      </h1>

      <h1 className="rounded-xl bg-blue-50 p-4 text-lg font-semibold text-slate-700">
        Current Weather Type is
        <span className="ml-2 text-blue-600">
          {weather?.description}
        </span>
      </h1>

      <h1 className="rounded-xl bg-cyan-50 p-4 text-lg font-semibold text-slate-700">
        Speed of Wind
        <span className="ml-2 text-cyan-600">
          {weather?.wind}
        </span>
      </h1>

    </div>
  </div>
  <form onSubmit={submite}>
   <input
  type="text"
  placeholder="Enter city name"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full max-w-md rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 placeholder:text-slate-400"
/>
      
  <button 
  type="submit" className="mt-4 w-full max-w-md rounded-xl bg-indigo-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-100">
    Submit
  </button>
      </form>
</div>


    </>
  );
}

export default App;
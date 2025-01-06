import React, { useState } from "react";
import ManufacturerSearch from "./components/ManufacturerSearch";
import Favorites from "./components/Favourites";

const App = () => {
  const [tab, setTab] = useState("search");

  return (
    <div className="p-6 font-sans">
      <div className="mb-4 flex items-center gap-3 bg-blue-200 p-5 rounded-xl">
        <div className="text-2xl font-bold mb-2">
          C01 W'25 React Lab
        </div>
        <button
          className={`px-2 py-2 mr-2 rounded ${
            tab === "search" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setTab("search")}
        >
          Search Manufacturers
        </button>
        <button
          className={`px-2 py-2 rounded ${
            tab === "favorites" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setTab("favorites")}
        >
          Favorites
        </button>
      </div>
      {tab === "search" ? (
        <ManufacturerSearch />
      ) : (
        <Favorites />
      )}
    </div>
  );
};

export default App;

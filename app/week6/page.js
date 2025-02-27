"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./ItemList";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
        Shopping List
      </h1>
      <div className="fixed right-16 bottom-16">
        {/* Button to open the form for adding new items */}
        <button
          className="bg-yellow-500 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-2 rounded-full w-20 h-20 flex items-center justify-center"
          onClick={() => setNewEventOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </button>
      </div>

      {newEventOpen && (
        <NewItem onAddItem={handleAddItem} onCloseNewItem={handleCloseNewItem} />
      )}
      {}
      <ItemList items={items} />
    </main>
  );
}

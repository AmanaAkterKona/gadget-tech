"use client";

import { createContext, useContext, useState, useEffect } from "react";
import initialItems from "@/data/items.json";

const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);

  // Component mount হলে localStorage থেকে load করুন
  useEffect(() => {
    const savedItems = localStorage.getItem("gadget-items");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      setItems(initialItems);
    }
  }, []);

  // Items change হলে localStorage এ save করুন
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("gadget-items", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateItem = (id, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, deleteItem, updateItem }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems must be used within ItemsProvider");
  }
  return context;
}
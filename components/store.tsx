"use client";
import { createContext, useCallback, useContext, useRef, useState } from "react";
import { inr } from "@/lib/data";

type Bag = { count: number; total: number; add: (name: string, price: number, qty?: number) => void; liked: Set<string>; toggleLike: (k: string) => void };
const Ctx = createContext<Bag | null>(null);

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const add = useCallback((name: string, price: number, qty = 1) => {
    setCount((c) => c + qty);
    setTotal((t) => t + price);
    setToast(`${name} · ${inr(price)} added to bag`);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 2200);
  }, []);
  const toggleLike = useCallback((k: string) => {
    setLiked((s) => {
      const n = new Set(s);
      n.has(k) ? n.delete(k) : n.add(k);
      return n;
    });
  }, []);

  return (
    <Ctx.Provider value={{ count, total, add, liked, toggleLike }}>
      {children}
      <div className={`toast ${toast ? "show" : ""}`} role="status">
        {toast}
      </div>
    </Ctx.Provider>
  );
}

export const useBag = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useBag outside BagProvider");
  return c;
};

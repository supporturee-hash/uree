"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";
type CartLine = { product: Product; qty: number };
type CartContextType = { lines: CartLine[]; count: number; subtotal: number; add: (p: Product) => void; update: (id: string, qty: number) => void; remove: (id: string) => void };
const CartContext = createContext<CartContextType | null>(null);
export function CartProvider({children}:{children:React.ReactNode}) {
 const [lines,setLines] = useState<CartLine[]>([]);
 useEffect(()=>{ try { const raw=localStorage.getItem("uree-cart"); if(raw) setLines(JSON.parse(raw)); } catch {} },[]);
 useEffect(()=>{ localStorage.setItem("uree-cart",JSON.stringify(lines)); },[lines]);
 const value = useMemo(()=>({
  lines, count:lines.reduce((n,l)=>n+l.qty,0), subtotal:lines.reduce((n,l)=>n+l.qty*l.product.price,0),
  add:(p:Product)=>setLines(old=>{const found=old.find(l=>l.product.id===p.id);return found?old.map(l=>l.product.id===p.id?{...l,qty:l.qty+1}:l):[...old,{product:p,qty:1}]}),
  update:(id:string,qty:number)=>setLines(old=>qty<1?old.filter(l=>l.product.id!==id):old.map(l=>l.product.id===id?{...l,qty}:l)),
  remove:(id:string)=>setLines(old=>old.filter(l=>l.product.id!==id))
 }),[lines]);
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart(){const v=useContext(CartContext);if(!v)throw new Error("useCart must be used inside CartProvider");return v;}

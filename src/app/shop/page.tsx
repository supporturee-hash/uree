"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
export default function Shop(){
 const params=useSearchParams(); const initial=params.get("category")||"All";
 const [category,setCategory]=useState(initial); const [query,setQuery]=useState("");
 const shown=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&`${p.name} ${p.brand}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
 return <main className="container-shell py-12"><p className="text-xs uppercase tracking-[.2em] text-sage">The collection</p><h1 className="text-4xl font-light mt-2">Shop all products</h1><div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"><div className="flex gap-2 overflow-x-auto pb-2">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`whitespace-nowrap border px-4 py-2 text-xs ${category===c?"bg-ink text-white border-ink":"border-stone-300"}`}>{c}</button>)}</div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." className="border border-stone-300 px-4 py-3 text-sm w-full sm:w-60"/></div><p className="text-xs text-stone-500 mt-6 mb-5">{shown.length} products</p><div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">{shown.map(p=><ProductCard key={p.id} product={p}/>)}</div></main>;
}

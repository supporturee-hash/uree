"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/components/CartProvider";
import Link from "next/link";
export default function ProductDetails(){
 const {id}=useParams<{id:string}>(); const p=products.find(x=>x.id===id); const {add}=useCart();
 if(!p)return <main className="container-shell py-24">Product not found. <Link href="/shop" className="underline">Return to shop</Link></main>;
 return <main className="container-shell py-12 grid md:grid-cols-2 gap-10"><div className="product-image relative aspect-[4/5]"><Image src={p.image} alt={p.name} fill className="object-cover" sizes="(max-width:768px) 100vw,50vw"/></div><div className="py-4"><p className="text-xs tracking-[.2em] uppercase text-sage">{p.brand}</p><h1 className="text-3xl font-light mt-3">{p.name}</h1><p className="text-sm text-stone-500 mt-3">{p.size}</p><p className="text-2xl font-semibold mt-6">৳{p.price.toLocaleString("en-BD")} {p.regularPrice&&<span className="text-base text-stone-400 line-through font-normal ml-2">৳{p.regularPrice.toLocaleString("en-BD")}</span>}</p><p className="mt-7 text-sm leading-7 text-stone-600">{p.description}</p><p className="mt-5 text-xs text-stone-500">{p.stock>0?`In stock (${p.stock} available)`:"Currently unavailable"}</p><button disabled={p.stock<1} onClick={()=>add(p)} className="mt-8 w-full bg-ink text-white py-4 text-xs tracking-[.2em] uppercase disabled:opacity-40">Add to bag</button><Link href="/cart" className="block text-center border border-ink py-4 mt-3 text-xs tracking-[.2em] uppercase">View bag / Checkout</Link><div className="mt-8 border-t border-stone-200 pt-5 text-sm leading-7 text-stone-600">100% authentic product commitment from uree. Please check product packaging and ingredient list before use.</div></div></main>;
}

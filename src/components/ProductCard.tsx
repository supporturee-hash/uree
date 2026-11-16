"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "./CartProvider";
export default function ProductCard({product}:{product:Product}){
 const {add}=useCart();
 return <article className="group">
  <Link href={`/product/${product.id}`} className="block">
   <div className="product-image relative aspect-[4/5] overflow-hidden rounded-sm">
    <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.04]"/>
    {product.badge&&<span className="absolute left-3 top-3 bg-white/90 px-2 py-1 text-[10px] tracking-wider uppercase">{product.badge}</span>}
   </div>
   <p className="mt-3 text-[10px] tracking-[.15em] uppercase text-stone-500">{product.brand}</p>
   <h3 className="mt-1 text-sm leading-5 min-h-10">{product.name}</h3>
  </Link>
  <div className="mt-2 flex items-center justify-between gap-2"><div className="text-sm font-semibold">৳{product.price.toLocaleString("en-BD")} {product.regularPrice&&<span className="ml-1 text-xs text-stone-400 line-through font-normal">৳{product.regularPrice.toLocaleString("en-BD")}</span>}</div>
   <button onClick={()=>add(product)} className="border border-stone-300 rounded-full p-2 hover:bg-ink hover:text-white transition" aria-label="Add to cart"><ShoppingBag size={16}/></button>
  </div>
 </article>;
}

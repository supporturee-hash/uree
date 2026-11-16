"use client";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "./CartProvider";
export default function Header(){
 const {count}=useCart();
 return <><div className="bg-ink text-white text-center text-[11px] sm:text-xs py-2 tracking-wide">100% AUTHENTIC PRODUCTS · DELIVERY ACROSS BANGLADESH</div>
 <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-100">
  <div className="container-shell h-[72px] flex items-center justify-between gap-4">
   <button className="md:hidden" aria-label="Open menu"><Menu size={22}/></button>
   <nav className="hidden md:flex gap-6 text-sm text-stone-600"><Link href="/shop">Shop</Link><Link href="/shop?category=Skincare">Skincare</Link><Link href="/shop?category=Body%20Care">Body Care</Link><Link href="/brands">Brands</Link></nav>
   <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center"><span className="block text-[27px] font-semibold tracking-[.22em]">uree</span><span className="block -mt-1 text-[10px] tracking-[.25em] text-stone-500">উড়ি</span></Link>
   <div className="flex items-center gap-4"><Link href="/shop" aria-label="Search"><Search size={20}/></Link><Link href="/cart" className="relative" aria-label="Shopping bag"><ShoppingBag size={21}/>{count>0&&<span className="absolute -right-2 -top-2 bg-sage text-white text-[10px] w-4 h-4 rounded-full grid place-items-center">{count}</span>}</Link></div>
  </div>
 </header></>;
}

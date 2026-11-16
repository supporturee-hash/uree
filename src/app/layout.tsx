import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
export const metadata: Metadata = { title:"uree | Authentic Beauty & Skincare", description:"Shop authentic skincare, beauty and personal care products at uree Bangladesh." };
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><CartProvider><Header/>{children}<footer className="mt-20 bg-ink text-white"><div className="container-shell py-12 grid sm:grid-cols-3 gap-8"><div><div className="text-3xl tracking-[.2em]">uree</div><p className="text-sm text-stone-300 mt-3">বিশ্বস্ততার সাথে আপনার প্রতিদিনের beauty essentials.</p></div><div><h4 className="font-semibold mb-3">Customer Care</h4><p className="text-sm text-stone-300 leading-7">Contact Us<br/>Delivery & Returns<br/>Order Tracking</p></div><div><h4 className="font-semibold mb-3">Stay Connected</h4><p className="text-sm text-stone-300">Follow uree for new arrivals and offers.</p><p className="text-xs text-stone-400 mt-6">© {new Date().getFullYear()} uree. All rights reserved.</p></div></div></footer></CartProvider></body></html>;
}

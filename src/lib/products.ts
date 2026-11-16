export type Product = {
  id: string; name: string; brand: string; category: string; price: number;
  regularPrice?: number; size: string; image: string; badge?: string;
  description: string; stock: number;
};
export const products: Product[] = [
 { id:"p1", name:"Centella Tone Brightening Capsule Ampoule", brand:"SKIN1004", category:"Serum", price:1450, regularPrice:1750, size:"100ml", image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900", badge:"Best Seller", description:"A lightweight daily ampoule for a hydrated, comfortable-looking complexion.", stock:24 },
 { id:"p2", name:"Cica Calming Oil-Free Moisturizer", brand:"Dot & Key", category:"Moisturizer", price:950, regularPrice:1100, size:"60g", image:"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=900", badge:"Popular", description:"A light gel-cream moisturizer for everyday hydration.", stock:18 },
 { id:"p3", name:"Advanced Snail 96 Mucin Power Essence", brand:"COSRX", category:"Essence", price:1250, regularPrice:1450, size:"100ml", image:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=900", description:"A hydrating essence that helps skin feel soft and supple.", stock:12 },
 { id:"p4", name:"Hydrating Facial Cleanser", brand:"CeraVe", category:"Face Wash", price:1650, regularPrice:1900, size:"236ml", image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900", description:"A gentle daily cleanser for a clean, comfortable feel.", stock:16 },
 { id:"p5", name:"Relief Sun Rice + Probiotics SPF50+", brand:"Beauty of Joseon", category:"Sunscreen", price:1350, regularPrice:1550, size:"50ml", image:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=900", badge:"Trending", description:"A comfortable daily sunscreen. Check packaging for full usage instructions.", stock:20 },
 { id:"p6", name:"Oat-In Calming Gel Cream", brand:"Purito", category:"Moisturizer", price:1399, size:"100ml", image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900", description:"A calming-feel gel cream for lightweight hydration.", stock:9 },
 { id:"p7", name:"Gluta-Hya Body Serum", brand:"Vaseline", category:"Body Care", price:780, regularPrice:900, size:"Extra Bright 200ml", image:"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=900", description:"A daily body-care serum lotion for soft, moisturized skin.", stock:30 },
 { id:"p8", name:"345 Relief Cream", brand:"Dr. Althea", category:"Moisturizer", price:1550, regularPrice:1750, size:"50ml", image:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=900", description:"A comforting face cream for your daily skincare routine.", stock:7 }
];
export const categories = ["All","Face Wash","Serum","Essence","Moisturizer","Sunscreen","Body Care"];

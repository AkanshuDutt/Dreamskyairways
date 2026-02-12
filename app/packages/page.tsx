import type { Metadata } from "next";
import PackageSetup from "./PackageSetup";

export const metadata: Metadata={
  title:"Affordable Tour Packages | Dream Sky Airways Best Deals",
  description:"Explore affordable tour packages with Dream Sky Airways. Get best travel deals, customized trips, flight bookings, and hassle-free holiday planning.",
  keywords: [
    "dream sky airways packages",
    "tour packages",
    "travel packages",
    "holiday packages",
    "cheap tour packages",
    "best travel deals",
    "india tour packages",
    "international tour packages",
    "flight and tour packages",
    "customized travel packages",
    "budget holiday packages",
    "family tour packages",
    "honeymoon packages",
    "vacation deals",
  ],
  alternates:{
    canonical:"https://www.dreamskyairways.com/packages",
  },
  robots:{
    index:true,
    follow:true,
    nocache:false,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:false,
      "max-video-preview":-1,
      "max-image-preview":"large",
      "max-snippet":-1,
    },
  },
  openGraph:{
    title:"Affordable Tour Packages | Dream Sky Airways Best Deals",
    description:"Explore affordable tour packages with Dream Sky Airways. Get best travel deals, customized trips, flight bookings, and hassle-free holiday planning.",
    url:"https://www.dreamskyairways.com/packages",
    siteName:"Dream Sky Airways",
    type:"website",
    locale:"en_IN",
    images:[
      {
      url:"https://www.dreamskyairways.com/ogImage.webp",
      width:1200,
      height:630,
      alt:"dream sky airways packages og image",  
  },
],
  },
  twitter:{
    card:"summary_large_image",
    title:"Affordable Tour Packages | Dream Sky Airways Best Deals",
    description:"Explore affordable tour packages with Dream Sky Airways. Get best travel deals, customized trips, flight bookings, and hassle-free holiday planning.",

  },

};
export default function Page(){
  return <PackageSetup />
};

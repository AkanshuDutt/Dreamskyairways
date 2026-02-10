import { packages } from "../data/packages";
import type { Metadata } from "next";


const metadata: Metadata={
  title:"Packages from dream sky airways",
  description:"there various packages available in dream sky airways",
  keywords: [
    "tour packages",

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
    title:"",
    description:"",
    url:"https://www.dreamskyairways.com/packages",
    siteName:"Dream Sky Airways",
    type:"website",
    locale:"en_IN",
  }

};
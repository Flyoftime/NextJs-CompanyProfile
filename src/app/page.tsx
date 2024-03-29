'use client'
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard";
import Service from "@/components/Service";
import { Providers } from "./providers";

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event:any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main>
      <Navbar  scrollTop={scrollTop}/>
      <Dashboard/>
    </main>
  );
}

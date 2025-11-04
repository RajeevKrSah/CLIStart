"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "@/components/home";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  
    });
  }, []);
  return (
    <>
    <Home/>
    </>
  );
}

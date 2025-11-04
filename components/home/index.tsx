'use client';

import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Property from "@/components/home/Property";
import Testimonial from "@/components/home/testimonial";
import WhyChooseUs from "@/components/home/whyus";
import Blog from "@/components/home/blog";

const Home = () => {
    return (
        <>
        <Hero/>
        <About/>
        <Property/>
        <WhyChooseUs/>
        <Testimonial/>
        <Blog/>
        </>
    )
}

export default Home

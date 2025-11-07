'use client';

import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Solutions from "@/components/home/solutions";
import Testimonial from "@/components/home/testimonial";
import WhyChooseUs from "@/components/home/whyus";
import Blog from "@/components/home/blog";

const Home = () => {
    return (
        <>
        <Hero/>
        <About/>
        <Solutions/>
        <WhyChooseUs/>
        <Testimonial/>
        <Blog/>
        </>
    )
}

export default Home

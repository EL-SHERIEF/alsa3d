'use client';
// Home.js


import { useState, useEffect } from 'react';
import Hero from "./components/hero";
import Bento from "./components/BentoGrids";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Safety from "./components/safety";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import BlogSlider from "./components/blog Slider";
import { getPosts, listenToPosts } from './lib/api';

export default function Home() {
  const [posts, setPosts] = useState([]); // State to store posts

  // Fetch initial posts when the component mounts
  useEffect(() => {
    // Fetch posts once when the component loads
    getPosts().then((data) => setPosts(data));

    // Set up real-time subscription to listen for changes
    const unsubscribe = listenToPosts((updatedPosts) => {
      setPosts(updatedPosts); // Update the state with real-time data
    });

    // Cleanup: Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this only runs on mount

  return (
    <>
      <Hero />
      <Stats />
      <Bento />
      <Values />
      <Safety />
      <Testimonials />
      <Pricing />
      <BlogSlider data={posts} title="المدونة" />
    </>
  );
}

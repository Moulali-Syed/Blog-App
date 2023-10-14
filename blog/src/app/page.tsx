'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/Navbar/Navbar';
import HomeSlider from '@/components/HomeSlider/HomeSlider';
import CategoriesSlider from '@/components/categories/CategoriesSlider';
import BlogSlider from '@/components/blogCards/BlogSlider';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSlider />
      <CategoriesSlider />
      <BlogSlider />
      <h1>This is home page</h1>
    </main>
  );
}

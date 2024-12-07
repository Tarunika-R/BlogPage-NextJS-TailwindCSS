'use client';

import Image from "next/image";
import Link from "next/link";
import Author from "@/components/_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-20">
        <h1 className="font-semibold text-3xl md:text-4xl pb-12 text-center">Trending</h1>
        <Slide />
      </div>
    </section>
  );
}

function Slide() {
  const slideData = [
    {
      id: 1,
      slug: "your-unhappy-customers",
      image: "/images/image1.jpg",
      category: "Business, Travel",
      date: "July 3, 2022",
      title: "Your most unhappy customers are your greatest source of learning",
      description:
        "Even the all-powerful Pointing has no control about the blind texts. It is an almost unorthographic life. One day, however, a small line of blind text decided to leave for the World of Grammar.",
    },
    {
      id: 2,
      slug: "modern-world-technology",
      image: "/images/image2.jpg",
      category: "Technology, Innovation",
      date: "July 10, 2022",
      title: "Technology is the heart of the modern world",
      description:
        "Blind texts are meaningless, but meaningful technology can change the world. Dive into the future of innovation and its impact on our lives.",
    },
    {
      id: 3,
      slug: "healthy-lifestyle-steps",
      image: "/images/image3.jpg",
      category: "Lifestyle, Health",
      date: "July 15, 2022",
      title: "A healthy lifestyle begins with small steps",
      description:
        "Explore the power of small, daily habits in transforming your lifestyle for a healthier, happier you.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={30}
      slidesPerView={1}
    >
      {slideData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image Container */}
            <div className="image relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Link href={`/blogs/${slide.slug}`} legacyBehavior>
                <a>
                  <Image
                    src={slide.image}
                    alt="Slide Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </a>
              </Link>
            </div>

            {/* Slide Information */}
            <div className="info flex justify-center flex-col px-4 md:px-0">
              <div className="cat">
                <Link href={`/blogs/${slide.slug}`} legacyBehavior>
                  <a className="text-orange-600 hover:text-orange-800">
                    {slide.category}
                  </a>
                </Link>
                <span className="text-gray-800"> - {slide.date}</span>
              </div>
              <div className="title">
                <Link href={`/blogs/${slide.slug}`} legacyBehavior>
                  <a className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
                    {slide.title}
                  </a>
                </Link>
              </div>
              <p className="text-gray-500 py-3 text-sm md:text-base">
                {slide.description}
              </p>
              <Author />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

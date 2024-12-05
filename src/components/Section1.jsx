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
    <section className="py-15">
      <div className="container mx-auto md:px-20">
        <h1 className="font-semibold text-4xl pb-12 text-center">Trending</h1>
        <Slide />
      </div>
    </section>
  );
}

function Slide() {
  const slideData = [
    {
      id: 1,
      image: "/images/image1.jpg",
      category: "Business, Travel",
      date: "July 3, 2022",
      title:
        "Your most unhappy customers are your greatest source of learning",
      description:
        "Even the all-powerful Pointing has no control about the blind texts. It is an almost unorthographic life. One day, however, a small line of blind text decided to leave for the World of Grammar.",
    },
    {
      id: 2,
      image: "/images/image2.jpg",
      category: "Technology, Innovation",
      date: "July 10, 2022",
      title: "Technology is the heart of the modern world",
      description:
        "Blind texts are meaningless, but meaningful technology can change the world. Dive into the future of innovation and its impact on our lives.",
    },
    {
      id: 3,
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
          <div className="grid md:grid-cols-2 gap-4">
            <div className="image relative w-full h-[400px">
              <Link href="/" legacyBehavior>
                <a>
                  <Image
                    src={slide.image}
                    alt="Slide Image"
                    width={600}
                    height={600}
                  />
                </a>
              </Link>
            </div>
            <div className="info flex justify-center flex-col">
              <div className="cat">
                <Link href="/" legacyBehavior>
                  <a className="text-orange-600 hover:text-orange-800">
                    {slide.category}
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-800 hover:text-gray-600">
                    - {slide.date}
                  </a>
                </Link>
              </div>
              <div className="title">
                <Link href="/" legacyBehavior>
                  <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
                    {slide.title}
                  </a>
                </Link>
              </div>
              <p className="text-gray-500 py-3">{slide.description}</p>
              <Author />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

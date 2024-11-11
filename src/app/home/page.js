"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetching the articles data from the JSON file in the public folder
    fetch("/data/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading articles:", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />

      {/* Intro Section */}
      <div className="flex flex-col items-center mt-20 px-4 sm:px-8">
        <h1
          style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#323231' }}
          className="text-center max-w-[90%] sm:max-w-[1100px] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[90px]"
        >
          UNVEILING ERIC GASSY'S UNTOLD STORY
        </h1>

        <h2
          style={{ fontFamily: 'Georgia, serif', color: '#323231' }}
          className="text-center max-w-[80%] sm:max-w-[632px] mt-6 text-[20px] sm:text-[30px] md:text-[37px]"
        >
          Insights From Yatala Labour Prison
        </h2>

        <div className="h-[50px] sm:h-[67px] w-[1px] bg-black mt-4"></div>

        <p
          style={{ fontFamily: 'Century Gothic, sans-serif', color: '#646462' }}
          className="text-center max-w-[85%] sm:max-w-[1100px] mt-4 leading-relaxed text-[14px] sm:text-[16px] md:text-[23px]"
        >
          Eric Gassy is a publishing platform that aims to raise awareness about Eric Gassy's
          situation through published articles. Our minimalist, modern design with a black and
          white color scheme reflects our dedication to simplicity and elegance.
        </p>

        <button className="mt-8 px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors text-[14px] sm:text-[16px] md:text-[18px]">
          Learn More
        </button>
      </div>

      {/* Grey Bar */}
      <div className="w-full h-[60px] bg-[#969594] mt-24 shadow-lg"></div>

      {/* "LATEST ARTICLES" Title */}
      <div className="px-4 sm:px-8 lg:px-12 mt-12 flex justify-start">
        <h2
          className="font-normal"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '80px',
            maxWidth: '428px',
            color: '#323231',
            letterSpacing: '0.05em',
            lineHeight: '0.9em',
          }}
        >
          LATEST ARTICLES
        </h2>
      </div>

      {/* Latest Articles Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-8 lg:px-12 mt-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative bg-cover bg-center rounded-lg shadow-lg flex flex-col justify-end"
            style={{
              backgroundImage: `url(${article.image})`,
              width: '400px',
              height: '500px',
            }}
          >
            <div className="absolute top-4 left-4 text-white text-sm">
              <p>{article.author}</p>
              <p>{article.date}</p>
            </div>

            <Link href={`/home/${article.slug}`} passHref>
              <h3 className="text-white font-bold text-lg mb-2 absolute bottom-16 left-4 right-4 cursor-pointer">
                {article.title}
              </h3>
            </Link>

            <hr className="border-t border-gray-400 opacity-50 mb-2 absolute bottom-12 left-4 right-4" />

            <div className="flex justify-between items-center text-white text-sm absolute bottom-4 left-4 right-4">
              <div className="flex items-center">
                <span className="mr-1">👁️</span>
                {article.views}
              </div>
              <div className="flex items-center">
                <span className="mr-1">❤️</span>
                {article.likes}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Get in Touch Section */}
      <div className="px-8 sm:px-20 lg:px-32 mt-12">
        {/* Horizontal Line */}
        <div className="w-full h-[2px] bg-black mb-12 lg:mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-16">
          {/* Image */}
          <div className="flex-none lg:w-[50%]">
            <Image
              src="/images/Fountain Pen.webp" // Replace with your image path
              alt="Fountain Pen"
              className="w-full h-auto max-w-[625px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-[500px] lg:w-[50%] flex flex-col justify-center mt-4 sm:mt-0">
            <h2
              className="text-3xl sm:text-7xl font-normal mb-4"
              style={{
                fontFamily: 'Georgia, serif',
                color: '#323231',
                lineHeight: '1.2em', // Adjust line height if needed
                letterSpacing: '0.05em', // Adjust kerning
              }}
            >
              Get in Touch
            </h2>
            <p
              className="leading-relaxed"
              style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#646462' }}
            >
              Want to reach out to Eric directly? You can send letters to the following address:
            </p>
            <p
              className="mt-4 font-bold"
              style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#646462' }}
            >
              1 Peter Brown Drive,<br />
              North Field, S.A. 5085, South Australia.
            </p>
            <p
              className="mt-4 leading-relaxed"
              style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: '#646462' }}
            >
              Feel free to write to Eric with any questions, words of support, or to learn more about his cause. Your letters can make a meaningful difference in Eric's journey and advocacy efforts.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />


    </div>
  );
}

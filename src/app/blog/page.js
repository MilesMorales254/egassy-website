"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from '../components/footer';

export default function BlogPage() {
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
      {/* Full-width Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Blog Page Title */}
      <div className="px-8 sm:px-20 mt-12 sm:mt-20">
        <h1
          className="text-4xl font-bold mb-12"
          style={{ fontFamily: "Georgia, serif", color: "#323231" }}
        >
          All Posts
        </h1>
      </div>

      {/* Blog Posts */}
      <div className="px-8 sm:px-20 space-y-20">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col lg:flex-row items-start gap-6"
          >
            {/* Image Section */}
            <div
              className="w-full lg:w-1/2 h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${article.image})`,
              }}
            ></div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-3">
              <p
                className="text-sm text-gray-600"
                style={{ fontFamily: "Georgia, serif" }}
              >
                by {article.author} · {article.date}
              </p>
              <Link href={`/home/${article.slug}`} passHref>
                <h2
                  className="text-2xl font-bold hover:underline"
                  style={{ fontFamily: "Georgia, serif", color: "#323231" }}
                >
                  {article.title}
                </h2>
              </Link>
              <p
                className="text-gray-800"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {article.snippet}
              </p>

              {/* Metrics Section */}
              <div className="flex items-center space-x-4 pt-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <span className="mr-1">👁️</span>
                  {article.views} views
                </div>
                <div className="flex items-center">
                  <span className="mr-1">❤️</span>
                  {article.likes} likes
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />

    </div>
  );
}

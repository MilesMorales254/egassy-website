"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import Header from "../../components/header";
import Footer from "../../components/footer"; // Ensure lowercase "f" matches your filename

export default function BlogPostPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/data/articles.json")
      .then((response) => response.json())
      .then((data) => {
        const article = data.find((item) => item.slug === slug);
        if (article) {
          setPost(article);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error loading article:", error);
        setError(true);
      });
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="text-center">
          <Header />
          <h1 className="text-3xl font-bold text-gray-700 mt-20">
            Article Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The article you are looking for does not exist or may have been removed.
          </p>
          <Link
            href="/home"
            passHref
          >
            <a className="mt-8 inline-block px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Full-width Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Article Content */}
      <div className="px-8 sm:px-20">
        <article className="mt-12 sm:mt-20">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#323231" }}
          >
            {post.title}
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            by {post.author} · {post.date}
          </p>

          <div className="space-y-8">
            <p className="text-gray-800" style={{ fontFamily: "Georgia, serif" }}>
              {post.snippet}
            </p>

            {/* Dynamically Render Content Images */}
            {Array.from({ length: post.imageCount }).map((_, index) => (
              <Image
                key={index}
                src={`${post.content}/Photo (${index + 1}).jpg`}
                alt={`Page ${index + 1}`}
                className="w-full max-w-[800px] mx-auto"
                loading="lazy"
              />
            ))}
          </div>

          <div className="flex items-center space-x-4 pt-8 text-gray-600 text-sm">
            <div className="flex items-center">
              <span className="mr-1">👁️</span>
              {post.views} views
            </div>
            <div className="flex items-center">
              <span className="mr-1">❤️</span>
              {post.likes} likes
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

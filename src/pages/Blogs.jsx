
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { blogPosts, slugify } from "../assets/data/blogs";

/* --- Reusable badge (dark) --- */
const Pill = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-200 shadow-sm ring-1 ring-inset ring-slate-700/70">
    {children}
  </span>
);

/* --- Blog card (dark) --- */
const BlogPostCard = ({ post }) => {
  const slug = `${post.id}-${slugify(post.title)}`;
  return (
    <Link
      to={`/resources/blogs/${slug}`}
      className="block group rounded-2xl bg-slate-900/80 ring-1 ring-inset ring-slate-800 shadow-sm hover:shadow-md hover:ring-slate-700 transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          src={post.image}
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent pointer-events-none" />
        <div className="absolute left-4 top-4">
          <Pill>{post.category}</Pill>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-extrabold text-xl text-slate-100 leading-snug group-hover:text-indigo-300 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-400 text-base mt-2 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center mt-6">
          <img
            className="h-10 w-10 rounded-full object-cover mr-3 ring-1 ring-slate-700 shadow"
            src={post.author.avatar}
            alt={post.author.name}
          />
          <div className="text-sm">
            <p className="font-semibold text-slate-200">{post.author.name}</p>
            <p className="text-slate-400">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blogs = () => {
  // Hide `category` only inside the hero carousel
  const slidesForCarousel = blogPosts.map(({ category, ...rest }) => rest);

  return (
    <div className="bg-slate-950 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* ---------- Top hero carousel ---------- */}
        <div className="blog-hero-carousel relative">
          <Carousel slides={slidesForCarousel} heightClass="h-[56vh]" />

          <style>
            {`
              /* NAV button placement (unchanged) */
              .blog-hero-carousel [aria-label="Previous slide"],
              .blog-hero-carousel [aria-label="Previous"],
              .blog-hero-carousel button[aria-label*="Prev"] {
                left: 1rem !important;
                top: 47% !important;
              }
              .blog-hero-carousel [aria-label="Next slide"],
              .blog-hero-carousel [aria-label="Next"],
              .blog-hero-carousel button[aria-label*="Next"] {
                right: 1rem !important;
                top: 47% !important;
              }

              /* ===== FORCE DESCRIPTION TO FULL LINE =====
                 Hit any Tailwind max-width utility that might be used in the caption stack. */
              .blog-hero-carousel [class*="max-w-"],
              .blog-hero-carousel [class^="max-w-"] {
                max-width: none !important;
              }

              /* If your caption wrapper has any of these common names, widen them */
              .blog-hero-carousel .caption,
              .blog-hero-carousel .slide-caption,
              .blog-hero-carousel .overlay,
              .blog-hero-carousel .content,
              .blog-hero-carousel .text,
              .blog-hero-carousel .copy {
                max-width: none !important;
                width: 100% !important;
              }

              /* Make paragraphs actually use the full line */
              .blog-hero-carousel p {
                max-width: none !important;
                width: 100% !important;
                white-space: normal !important;
                line-height: 1.6;
              }

              @media (min-width: 768px) {
                .blog-hero-carousel [aria-label="Previous slide"],
                .blog-hero-carousel [aria-label="Previous"],
                .blog-hero-carousel button[aria-label*="Prev"] {
                  left: 1rem !important;
                  top: 47% !important;
                }
                .blog-hero-carousel [aria-label="Next slide"],
                .blog-hero-carousel [aria-label="Next"],
                .blog-hero-carousel button[aria-label*="Next"] {
                  right: 1rem !important;
                  top: 47% !important;
                }
              }
            `}
          </style>
        </div>

        {/* ---------- Header ---------- */}
        <header className="text-center mb-16 mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Blogs
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-2xl mx-auto">
            Explore our latest articles on software, marketing, cloud, and more.
          </p>
        </header>

        {/* ---------- Grid ---------- */}
        <section aria-label="Blog posts">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* ---------- Divider ---------- */}
        <div className="mt-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

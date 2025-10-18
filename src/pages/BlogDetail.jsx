


import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts, slugify } from "../assets/data/blogs";

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800/60 text-slate-300 shadow-sm ring-1 ring-inset ring-slate-700/60">
    {children}
  </span>
);

const MetaRow = ({ post }) => (
  <div className="flex flex-wrap items-center gap-3">
    <Badge>{post.category}</Badge>
    <Badge>{post.date}</Badge>
  </div>
);

const RelatedList = ({ currentId }) => {
  const related = blogPosts.filter((p) => p.id !== currentId).slice(0, 4);
  return (
    <div className="space-y-4">
      {related.map((p) => (
        <Link
          key={p.id}
          to={`/resources/blogs/${p.id}-${slugify(p.title)}`}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/50 bg-slate-900/60 border border-slate-800 shadow-sm transition"
        >
          <img
            src={p.image}
            alt={p.title}
            className="h-14 w-20 object-cover rounded-lg"
          />
          <div className="min-w-0">
            <div className="text-[11px] uppercase text-slate-400 font-semibold">
              {p.category}
            </div>
            <div className="text-sm text-slate-200 font-medium line-clamp-2">
              {p.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const PrevNext = ({ post }) => {
  const ordered = [...blogPosts].sort((a, b) => a.id - b.id);
  const idx = ordered.findIndex((p) => p.id === post.id);
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx < ordered.length - 1 ? ordered[idx + 1] : null;

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="flex">
        {prev ? (
          <Link
            to={`/resources/blogs/${prev.id}-${slugify(prev.title)}`}
            className="flex-1 p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow hover:shadow-md transition"
          >
            <div className="text-xs text-slate-400 mb-1">Previous</div>
            <div className="font-semibold text-slate-100 line-clamp-2">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1 p-4 rounded-xl bg-slate-800/50 text-slate-500">
            No previous post
          </div>
        )}
      </div>
      <div className="flex">
        {next ? (
          <Link
            to={`/resources/blogs/${next.id}-${slugify(next.title)}`}
            className="flex-1 p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow hover:shadow-md transition text-right"
          >
            <div className="text-xs text-slate-400 mb-1">Next</div>
            <div className="font-semibold text-slate-100 line-clamp-2">
              {next.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1 p-4 rounded-xl bg-slate-800/50 text-slate-500 text-right">
            No next post
          </div>
        )}
      </div>
    </div>
  );
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const id = Number(slug.split("-")[0]);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-slate-200">
        <p className="text-xl">Post not found.</p>
        <button
          onClick={() => navigate("/resources/blogs")}
          className="text-indigo-400 font-semibold mt-4 inline-block hover:underline"
        >
          ← Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      {/* Hero */}
      <div className="relative h-[42vh] md:h-[50vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <MetaRow post={post} />
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-3 text-white">
            {post.title}
          </h1>
          <div className="flex items-center mt-4 gap-3">
            {post.author?.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-700/60"
              />
            )}
            <div className="text-sm">
              <div className="font-semibold text-white">
                {post.author?.name}
              </div>
              <div className="text-slate-400">{post.date}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-slate-400">
          <Link to="/" className="hover:text-slate-100">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/blogs" className="hover:text-slate-100">
            Blogs
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-100 font-medium">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main */}
          <article className="lg:col-span-8">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md p-6 md:p-8">
              {post.description && (
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                  {post.description}
                </p>
              )}

              {/* TL;DR */}
              <div className="mb-6 rounded-xl bg-indigo-900/30 border border-indigo-800 p-4 md:p-5">
                <div className="text-sm font-semibold text-indigo-300 mb-1">
                  TL;DR
                </div>
                <p className="text-indigo-100/90">
                  Key insight: focus on the highest-impact workflows first,
                  instrument everything, and ship in thin vertical slices to
                  de-risk delivery.
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-strong:text-white">
                {post.content?.map((p, i) => <p key={i}>{p}</p>)}
                <h3>Key Takeaways</h3>
                <ul>
                  <li>Clear KPIs and ROI model keep the project honest.</li>
                  <li>Integrations via events/webhooks reduce coupling.</li>
                  <li>Security, observability, and versioning from day one.</li>
                </ul>
              </div>

              {/* Share + Back */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Share on X
                </a>
                <Link
                  to="/blogs"
                  className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition"
                >
                  ← Back to Blogs
                </Link>
              </div>

              {/* Prev / Next */}
              <PrevNext post={post} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <div className="flex items-center gap-3">
                <img
                  src={post.author?.avatar}
                  alt={post.author?.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-400/40"
                />
                <div>
                  <div className="font-semibold text-slate-100">
                    {post.author?.name}
                  </div>
                  <div className="text-sm text-slate-400">
                    Contributor — SOSEO Tech
                  </div>
                </div>
              </div>
              <p className="text-slate-400 mt-4 text-sm">
                {post.author?.name} writes about{" "}
                {post.category.toLowerCase()} and how teams can ship value
                faster with reliable systems and clean UX.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <div className="text-sm font-semibold mb-3 text-slate-200">
                Quick facts
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  Published:{" "}
                  <span className="text-slate-400">{post.date}</span>
                </li>
                <li>
                  Category:{" "}
                  <span className="text-slate-400">{post.category}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6">
              <div className="text-sm font-semibold mb-3 text-slate-200">
                Related posts
              </div>
              <RelatedList currentId={post.id} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

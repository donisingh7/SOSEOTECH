
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { newsletters, slugify } from "../assets/data/newsletters";

/* --- UI bits (dark) --- */
const Pill = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-700/60 text-slate-200 ring-1 ring-white/10">
    {children}
  </span>
);

const Related = ({ currentId }) => {
  const rel = newsletters.filter(n => n.id !== currentId).slice(0, 4);
  return (
    <div className="space-y-4">
      {rel.map((n) => (
        <Link
          key={n.id}
          to={`/resources/newsletters/${n.id}-${slugify(n.title)}`}
          className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 ring-1 ring-white/10 hover:bg-slate-800 transition"
        >
          <img
            src={n.image}
            alt={n.title}
            className="h-14 w-20 object-cover rounded-lg"
          />
          <div className="min-w-0">
            <div className="text-[11px] uppercase text-slate-400 font-semibold">
              {n.category}
            </div>
            <div className="text-sm text-slate-100/90 font-medium line-clamp-2">
              {n.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const PrevNext = ({ post }) => {
  const ordered = [...newsletters].sort((a, b) => a.id - b.id);
  const idx = ordered.findIndex((p) => p.id === post.id);
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx < ordered.length - 1 ? ordered[idx + 1] : null;

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="flex">
        {prev ? (
          <Link
            to={`/resources/newsletters/${prev.id}-${slugify(prev.title)}`}
            className="flex-1 p-4 rounded-xl bg-slate-800/60 ring-1 ring-white/10 hover:bg-slate-800 transition"
          >
            <div className="text-xs text-slate-400 mb-1">Previous</div>
            <div className="font-semibold text-slate-100/90 line-clamp-2">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1 p-4 rounded-xl bg-slate-800/40 text-slate-500 ring-1 ring-white/5">
            No previous issue
          </div>
        )}
      </div>
      <div className="flex">
        {next ? (
          <Link
            to={`/resources/newsletters/${next.id}-${slugify(next.title)}`}
            className="flex-1 p-4 rounded-xl bg-slate-800/60 ring-1 ring-white/10 hover:bg-slate-800 transition text-right"
          >
            <div className="text-xs text-slate-400 mb-1">Next</div>
            <div className="font-semibold text-slate-100/90 line-clamp-2">
              {next.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1 p-4 rounded-xl bg-slate-800/40 text-slate-500 ring-1 ring-white/5 text-right">
            No next issue
          </div>
        )}
      </div>
    </div>
  );
};

const NewsletterDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const id = Number(slug.split("-")[0]);
  const post = newsletters.find((n) => n.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-slate-100">
        <p className="text-xl">Issue not found.</p>
        <button
          onClick={() => navigate("/resources/newsletter")}
          className="text-amber-300 font-semibold mt-4 inline-block"
        >
          ← Back to Newsletters
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100">
      {/* Hero */}
      <div className="relative h-[36vh] md:h-[46vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.2)_0%,rgba(2,6,23,0.65)_55%,rgba(2,6,23,0.95)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <div className="flex gap-2 flex-wrap mb-2">
            <Pill>{post.category}</Pill>
            {post.tags?.slice(0, 3).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center mt-3 gap-3">
            {post.author?.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
              />
            )}
            <div className="text-sm">
              <div className="font-semibold">{post.author?.name}</div>
              <div className="text-slate-300/80">{post.date}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-slate-400">
          <Link to="/" className="hover:text-slate-200">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/resources/newsletter" className="hover:text-slate-200">
            Newsletters
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-100 font-medium">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main */}
          <article className="lg:col-span-8">
            <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 md:p-8">
              <p className="text-lg md:text-xl text-slate-200/90 leading-relaxed mb-6">
                {post.description}
              </p>

              {/* Prose in dark */}
              <div className="prose prose-invert prose-headings:text-slate-100 prose-p:text-slate-200/90 prose-strong:text-slate-100 max-w-none">
                {post.content?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                <h3>Highlights</h3>
                <ul>
                  {(post.tags || []).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* Prev / Next */}
              <PrevNext post={post} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick meta */}
            <section className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
              <div className="text-sm font-semibold text-slate-100">
                At a glance
              </div>
              <ul className="mt-2 text-sm text-slate-300 space-y-1">
                <li>
                  <span className="text-slate-400">Date:</span> {post.date}
                </li>
                <li>
                  <span className="text-slate-400">Category:</span>{" "}
                  {post.category}
                </li>
                <li className="flex flex-wrap gap-1 items-center">
                  <span className="text-slate-400 mr-1">Tags:</span>
                  {post.tags?.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </li>
              </ul>
            </section>

            {/* Related */}
            <section>
              <div className="text-sm font-semibold text-slate-100 mb-3">
                Related issues
              </div>
              <Related currentId={post.id} />
            </section>

            {/* Subscribe */}
            <section className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-100">
                  Get new issues by email
                </div>

                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-xl bg-amber-300 text-black font-semibold shadow hover:brightness-95 transition"
                >
                  Contact Now
                </Link>
              </div>
            </section>

          </aside>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            to="/resources/newsletter"
            className="inline-block text-amber-300 font-semibold hover:underline"
          >
            ← Back to Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsletterDetail;

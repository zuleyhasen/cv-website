import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = 'https://coehgkkehbpbagmvqoox.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZWhna2tlaGJwYmFnbXZxb294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMjQ0MTQsImV4cCI6MjA3NjgwMDQxNH0.XM28TqzFexXUCjydM6J6RsIak1FGHXhuh-2vQg-_W-M';

const supabase = createClient(supabaseUrl, supabaseKey);

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

async function loadPost() {
  if (!slug) return;

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    document.querySelector(".container").innerHTML = "<p>Post not found.</p>";
    return;
  }

  // Görsel (cover image)
  const coverContainer = document.getElementById("cover-container");
  if (post.cover_image) {
    const img = document.createElement("img");
    img.src = post.cover_image;
    img.alt = post.title;
    coverContainer.appendChild(img);
  }

  // Başlık
  document.getElementById("post-title").textContent = post.title;

  // Tarih
  document.getElementById("post-date").textContent = new Date(post.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Tagler (örneğin tags alanın JSON ya da virgülle ayrılmış string olmalı)
  const tagsContainer = document.getElementById("post-tags");
  if (post.tags) {
    const tags = Array.isArray(post.tags) ? post.tags : post.tags.split(",");
    tags.forEach(tag => {
      const span = document.createElement("span");
      span.classList.add("tag");
      span.textContent = tag.trim();
      tagsContainer.appendChild(span);
    });
  }

  // Özet
  if (post.excerpt) document.getElementById("post-excerpt").textContent = post.excerpt;

  // İçerik (HTML olarak render edilecek)
  document.getElementById("post-content").innerHTML = post.content;
}

loadPost();

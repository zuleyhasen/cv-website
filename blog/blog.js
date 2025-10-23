import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://coehgkkehbpbagmvqoox.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZWhna2tlaGJwYmFnbXZxb294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMjQ0MTQsImV4cCI6MjA3NjgwMDQxNH0.XM28TqzFexXUCjydM6J6RsIak1FGHXhuh-2vQg-_W-M';

const supabase = createClient(supabaseUrl, supabaseKey);

const blogGrid = document.getElementById("blog-grid");
const emptyState = document.getElementById("empty-state");

async function fetchBlogPosts() {
    const { data: posts, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

    if (error) {
        console.error("Blog yazıları alınırken bir hata oluştu:", error);
        emptyState.style.display = "block";
        return;
    }

    if (!posts || posts.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    posts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("blog-card");
        article.innerHTML = `
                    ${post.cover_image ? `<div class="blog-image"><img src="${post.cover_image}" alt="${post.title}" /></div>` : ""}
                    <div class="blog-content">
                        <div class="blog-meta">
                            <time datetime="${post.published_at || ""}">${formatDate(post.published_at)}</time>
                        </div>
                        <h2><a href="/blog/${post.slug}">${post.title}</a></h2>
                        <p class="excerpt">${post.excerpt}</p>
                        ${post.tags && post.tags.length > 0 ? `<div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>` : ""}
                        <a href="/blog/blog-post.html?slug=${post.slug}" class="read-more">Read More →</a>

                    </div>
                `;
        blogGrid.appendChild(article);
    });
}

function formatDate(date) {
    if (!date) return "Yayınlanmamış";
    return new Date(date).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

document.addEventListener("DOMContentLoaded", fetchBlogPosts);
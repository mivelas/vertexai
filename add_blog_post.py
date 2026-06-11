import re

html_path = "/mnt/c/Github/vertexai/public/chatgpt-vs-claude-solo-founders-2026.html"
ts_path = "/mnt/c/Github/vertexai/src/data/blogPosts.ts"

with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract from <nav class="toc"> to </article>
start_idx = html_content.find('<nav class="toc">')
end_idx = html_content.find('</article>') + len('</article>')
content_html = html_content[start_idx:end_idx]

# Escape backticks and $ if any
content_html = content_html.replace('`', '\\`').replace('$', '\\$')

new_post = f"""  }},
  {{
    id: '2',
    slug: 'chatgpt-vs-claude-solo-founders-2026',
    title: 'ChatGPT vs Claude for Solo Founders in 2026: Which One Actually Saves You More Time?',
    excerpt: 'ChatGPT vs Claude head-to-head for solo founders in 2026 — writing, coding, pricing, and which one you should pay for based on your actual workflow.',
    author: 'Nexalist Editorial',
    date: 'June 2026',
    datePublished: '2026-06-11',
    category: 'AI Tools Comparison',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    content: `
{content_html}
    `
  }}
];"""

with open(ts_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Replace the last "}];" or "}\n];"
ts_content = re.sub(r'\}\n\];', new_post, ts_content)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Blog post appended successfully.")

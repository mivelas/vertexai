import re

html_path = "/mnt/c/Github/vertexai/public/create-the-professional-email-with-ai.html"
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
    id: '4',
    slug: 'create-the-professional-email-with-ai',
    title: 'How to Write a Professional Email Using AI — Even If You Hate Writing (2026 Guide)',
    excerpt: 'A practical guide for non-writers and solo founders on using AI to write better professional emails — faster, with the right tone, and without staring at a blank screen.',
    author: 'Nexalist Editorial',
    date: 'June 2026',
    datePublished: '2026-06-22',
    category: 'AI Writing Guide',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800',
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


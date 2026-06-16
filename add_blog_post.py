import re

html_path = "/mnt/c/Github/vertexai/public/build-website-claude-no-code-2026.html"
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
    id: '3',
    slug: 'build-website-claude-no-code-2026',
    title: 'How to Build and Publish a Website Using Claude — No Coding Required (2026 Guide)',
    excerpt: 'A step-by-step guide for non-technical people to design, build, and publish a real website using Claude — from your first prompt to a live, shareable link.',
    author: 'Nexalist Editorial',
    date: 'June 2026',
    datePublished: '2026-06-16',
    category: 'No-Code Guide',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
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
